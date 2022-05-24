import React, {useState, useEffect} from 'react';
import * as C from './style';
import emptyMovie from '../../assets/video-camera-vazio.png'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import { UnlikedMovieDetail } from '../../components/UnlikedMoviesModal';

export default function UnlikedMovies(){
    const [loading, setLoading] = useState(true)
    const [unlikedMovies, setUnLikedMovies] = useState()
    const [indexMovie, setIndexMovie] = useState(0);
    const [unlikedModal, setUnlikedModal] = useState(false)
    const imageBaseUrl = process.env.REACT_APP_IMAGEBASE


    useEffect(() => {
        const unlikedMoviesStorage = localStorage.getItem('unlikedMovies')
        const unlikedMovies = JSON.parse(unlikedMoviesStorage)
        setUnLikedMovies(unlikedMovies)
        setLoading(false)
    }, [])

    function handleMovieDetail(index){
        setIndexMovie(index)
        setUnlikedModal(prev => !prev)
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
                
                {!unlikedMovies ?
                    <C.EmptyMovie>
                        <div className='noMovie'>
                            <img src={emptyMovie} alt="Imagem de uma câmera representando a ausência de filmes"/>
                            <h1>Nenhum filme</h1>
                        </div>  
                    </C.EmptyMovie>:
                    <>
                        <UnlikedMovieDetail
                            unlikedMovies={unlikedMovies}
                            indexMovie={indexMovie}
                            unlikedModal={unlikedModal}
                            setUnlikedModal={setUnlikedModal}
                        />
                        <C.HasMovies>
                            <div className='likedMovies'>
                                {unlikedMovies.map((movie, index) => {
                                    return(
                                        <C.Card key={movie.id} style={{backgroundImage: `url(${imageBaseUrl + movie.poster_path})`}}>
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
                                                        <p className='desktop-button'>{movie.overview ? (movie.overview).slice(0, 30) + "...  " : 'Este filme não tem sinopse.'} 
                                                        {movie.overview === '' ? null : <button onClick={(e) => handleMovieDetail(index)}> Ver sinopse </button>}</p>
                                                        {movie.overview === '' ?  null : <button className='mobile-button' onClick={(e) => handleMovieDetail(index)}> Ver sinopse </button> }
                                                    </div>
                                                </div>
                                            </C.About>
                                        </div>   
                                        </C.Card>
                                    )
                                })}
                            </div>
                        </C.HasMovies>
                    </>
                }
                
        </C.Container>
    )
}