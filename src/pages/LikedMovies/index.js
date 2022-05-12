import React, {useState, useEffect} from 'react';
import * as C from './style';
import emptyMovie from '../../assets/video-camera-vazio.png'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

export default function LikedMovies({movies}){
    const [loading, setLoading] = useState(true)
    const [likedMovies, setLikedMovies] = useState()
    const imageBaseUrl = process.env.REACT_APP_IMAGEBASE

    useEffect(() => {
        const likedMoviesStorage = localStorage.getItem('likedMovies')
        const likedMovies = JSON.parse(likedMoviesStorage)
        setLikedMovies(likedMovies)
        console.log(likedMovies)
        setLoading(false)
    }, [])

    function handleMovieDetail(){
        alert('Sinopse do filme')
    }

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
                        <div className='likedMovies'>
                            {likedMovies.map((movie) => {
                                return(
                                    <C.Card style={{backgroundImage: `url(${imageBaseUrl + movie.backdrop_path})`}}>
                                     <div className='gradient-effect'>
                                        <C.About>
                                            <div className='movie-about'>
                                                <div className='movie-tittle'>
                                                    <h2>{movie.title}</h2>
                                                </div>
                                                <div className='movie-datas'>
                                                    <div className='movie-heart'>
                                                        <AiFillHeart/><AiFillHeart/><AiFillHeart/><AiFillHeart/><AiOutlineHeart/>
                                                    </div>
                                                    <div className='movie-rating'>
                                                        <p>({movie.vote_count} avaliações)</p>
                                                    </div>
                                                </div>
                                                <div className='movie-sinopse'>
                                                    <p>{movie.overview ? (movie.overview).slice(0, 36) + "...  " : 'Este filme não tem sinopse.'}</p>
                                                    {movie.overview === '' ? null : <button onClick={handleMovieDetail}> Ver sinopse </button>}    
                                                </div>
                                            </div>
                                        </C.About>
                                     </div>   
                                    </C.Card>
                                )
                            })}
                        </div>
                    </C.HasMovies>
                }
        </C.Container>
    )
}