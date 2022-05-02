import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import * as C from './style'
import liked from '../../assets/liked.png'
import unliked from '../../assets/unliked.png'


export default function Home(){
    const imageBaseUrl = process.env.REACT_APP_IMAGEBASE
    const [index, setIndex] = useState(0)
    const [movies, setMovies] = useState('');

    useEffect(() => {
        async function loadMovies(){
           const results = await api.get('sort_by=popularity.desc&page=1') 
           setMovies(results.data.results)
           console.log(results.data.results)
        }
        loadMovies()
    }, []) 
    
    function nextMovie(){
        if (index === 19){
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    return(
        <>
            {movies ?
                <C.Container>
                    <C.CardContainer>
                        <C.Card style={{backgroundImage: `url(${imageBaseUrl + movies[index].backdrop_path})`}}>
                            <C.About>
                                <div className='movie-about'>
                                    <div className='movie-tittle'>
                                        <h1>{movies[index].original_title}</h1>
                                        <p>{(movies[index].release_date).slice(0, 4)} - </p>
                                    </div>
                                    <div className='movie-rating'>
                                        <p>Five stars</p>
                                    </div>
                                </div>
                                <div className='movie-sinopse'>
                                    <p>{(movies[index].overview).slice(0, 90)}...<button><a href='*'>Sinopse</a></button></p>
                                </div>
                            </C.About>
                        </C.Card>
                        <C.Buttons>
                            <button className='choose-liked'><img src={unliked} alt='imagem de dedo para baixo'/><p>Não curti!</p></button>
                            <button className='next' onClick={nextMovie}><p>Pular</p></button>
                            <button className='choose-liked'><img src={liked} alt='imiagem de dedo para cima'/><p>Curti!</p></button>
                        </C.Buttons>
                    </C.CardContainer>
                </C.Container> :
                <C.EmptyMovie>
                    <div>
                        <h1>Não há filmes</h1>
                    </div>
                </C.EmptyMovie>
            }  
        </>
    )
}