import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import api from '../../services/api';
import './infofilme.css';
import { toast } from 'react-toastify';

function Filme(){
    const {id} = useParams();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);
    const usenavigate = useNavigate();
    
    useEffect(()=>{
        async function loadFilmes(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: "231837a2d335b8ee1023da518f21db0d",
                    language: "pt-BR"
                }
            })
            .then((response)=>{
                setFilme(response.data);
                setLoading(false);
            })
            .catch(()=>{
                console.log("Filme não encontrado")
                usenavigate("*", {replace: true});
                return;
            })
        }

        loadFilmes();

        return() => {
            console.log("componente desmontado")
        }
    },[useNavigate,id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@cineAcai")

        let filmeSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmeSalvos.some( (filmeSalvo) => filmeSalvo.id === filme.id)

        if(hasFilme){
            toast.warn("Esse filme já está na sua lista")
            return;
        }

        filmeSalvos.push(filme);
        localStorage.setItem("@cineAcai", JSON.stringify(filmeSalvos));
        toast.success("Filme adicionado a sua lista!")

    }

    if(loading){
        return(
            <div className='loading'>
                <h1>CARREGANDO DETALHES DO FILME...</h1>
            </div>
        )
    }

    return(
        <div className='filmeinfo'>
            <article>
                <h1>{filme.title}</h1>
                <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}alt={filme.title}/>
                <h3>Sinopse</h3>
                <span>{filme.overview}</span>
                <strong>Avaliação: {filme.vote_average} /10</strong>
                
                    <div className='areaBtn'> 
                        <button onClick={salvarFilme}>Salvar</button>
                        <button>
                            <a target="blank" rel="external" href={`https://www.youtube.com/results?search_query=${filme.title} trailer`}>Trailer</a>
                        </button>
                    </div>
          
            </article>
        </div>
    )
}

export default Filme;