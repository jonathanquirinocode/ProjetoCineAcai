import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./home.css";
//URL DA API: /movie/now_playing?api_key=231837a2d335b8ee1023da518f21db0d&language=pt-BR

function Home(){
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{

        async function loadFilmes(){
            const response = await api.get("movie/now_playing",{
                params:{
                    api_key: "231837a2d335b8ee1023da518f21db0d",
                    language: "pt-BR",
                    page: 1,
                }
            })

           setFilmes(response.data.results.slice(0.15));
        }

        loadFilmes();

    }, [])
    return(
        <div className="container">
            <div className="listafilmes">
                {filmes.map((filme)=> {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                            alt={filme.title}/>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}
export default Home;