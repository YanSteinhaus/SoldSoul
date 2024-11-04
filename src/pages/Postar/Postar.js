import React, { useState, useEffect } from "react"; 
import { Link } from "react-router-dom"; 
import { redesocial } from "../../firebaseConexao"; 
import { addDoc, collection, getDocs, updateDoc, doc } from "firebase/firestore"; 
import './Postar.css';

function Postar() {
    const [post, setPost] = useState('');
    const [posts, setPosts] = useState([]); 

    useEffect(() => {
        buscar(); // Chama a função buscar assim que o componente é montado
    }, []);

    const adicionar = async () => {
        if (post.trim() === "") {
            alert("Por favor, escreva algo antes de postar.");
            return;
        }

        await addDoc(collection(redesocial, "posts"), { post, like: 0 })
            .then(() => {
                console.log("Postado");
                setPost(''); // Limpa o campo após postar
                buscar(); // Atualiza os posts após adicionar um novo
            })
            .catch((error) => {
                console.log("Erro ao postar", error);
            });
    }

    const buscar = async () => {
        const postRef = collection(redesocial, "posts");
        const snapshot = await getDocs(postRef); 
        const listas = snapshot.docs.map(doc => ({
            id: doc.id,
            post: doc.data().post,
            like: doc.data().like,
        }));
        setPosts(listas); // Atualiza a lista de postagens
    }

    const curtir = async (id, currentLikes) => {
        const postRef = doc(redesocial, "posts", id);
        await updateDoc(postRef, { like: currentLikes + 1 })
            .then(() => {
                console.log("Post curtido");
                buscar(); 
            })
            .catch((error) => {
                console.log("Erro ao curtir", error);
            });
    }

    return (
        <div className="postar-container">
            <h2>Criar Postagem</h2>
            <textarea
                placeholder="O que está acontecendo?"
                value={post}
                onChange={(e) => setPost(e.target.value)} 
            />
            <button onClick={adicionar}>Postar</button> 

            <h3>Postagens</h3>
            <ul className="post-list">
                {posts.map((p) => ( 
                    <li key={p.id} className="post-item">
                        <div className="post-content">
                            <p>{p.post}</p>
                            <div className="likes">
                                <button onClick={() => curtir(p.id, p.like)}>Curtir</button>
                                <span>Likes: {p.like}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Postar;
