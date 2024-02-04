import { useEffect, useState } from "react";
import api from "../../services/api";

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

            console.log(response.data.results);
        }

        loadFilmes();

    }, [])
    return(
        <h1>odeio github</h1>
    )
}
export default Home;