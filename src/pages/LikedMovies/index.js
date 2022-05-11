import React, {useState, useEffect} from 'react';
import * as C from './style';
import emptyMovie from '../../assets/video-camera-vazio.png'

export default function LikedMovies(){
    const [loading, setLoading] = useState(true)
    const [likedMovies, setLikedMovies] = useState()

    useEffect(() => {
        const likedMoviesStorage = localStorage.getItem('likedMovies')
        const likedMovies = JSON.parse(likedMoviesStorage)
        setLikedMovies(likedMovies)
        console.log(likedMovies)
        setLoading(false)
    }, [])

    return(
        <C.Container>
                <div className='title'>
                    <h1>Filmes curtidos</h1>
                </div>
                {loading && 
                    <div className='loading'>
                        <h1>Carregando filmes curtidos...</h1>
                    </div>
                }
            
                {!likedMovies ?
                    <C.EmptyMovie>
                        <div className='noMovie'>
                            <img src={emptyMovie} alt="Imagem de uma câmera representando a ausência de filmes"/>
                            <h1>Nenhum filme</h1>
                        </div>  
                    </C.EmptyMovie>:
                    <C.HasMovies>
                        {likedMovies.map((movie) => {
                            return(
                                <C.Card>
                                    
                                </C.Card>
                            )
                        })}
                    </C.HasMovies>
                }
        </C.Container>
    )
}