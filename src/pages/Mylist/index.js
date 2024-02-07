import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './mylist.css';
import { toast } from 'react-toastify';

function Mylist(){
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        
        const minhaLista = localStorage.getItem("@cineAcai");
        setFilmes(JSON.parse(minhaLista) || [])

    }, []);

    function removeFilme(id){
        let filtroFilmes = filmes.filter( (item) => {
            return (item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem("@cineAcai", JSON.stringify(filtroFilmes));
        toast.info("Filme removido da Sua lista!")

    }

    return(
        <div className= "meusfilmes">
            <h1>Meus Favoritos</h1>

            {filmes.length === 0 && <span className='noFilmes'>Ops, Você ainda não salvou nenhum filme 😔</span>}

            <ul>
                {filmes.map((item) => {
                    return(
                        <li key={item.id}>
                            <span>Nome: {item.title}</span>
                            
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button onClick={() => removeFilme(item.id) }>Remover</button>
                            </div>
                        
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Mylist;