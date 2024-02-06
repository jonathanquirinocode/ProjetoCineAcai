import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import api from '../../services/api';
import './infofilme.css';


function Filme(){
    const {id} = useParams();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

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
            })
        }

        loadFilmes();

        return() => {
            console.log("componente desmontado")
        }
    },[])

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
                <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
                alt={filme.title}/>
                <h3>Sinopse</h3>
                <span>{filme.overview}</span>
                <strong>Avaliação: {filme.vote_average} /10</strong>
                <div className='areaBtn'> 
                    <button>Salvar</button>
                    <button><a href='#'>Trailer</a></button>
                </div>
            </article>
        </div>
    )
}

export default Filme;