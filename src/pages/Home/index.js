import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import * as C from './style'


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
                                        <p>Ola</p>
                                    </div>
                                    <div className='movie-rating'>
                                        <p>Five stars</p>
                                    </div>
                                </div>
                                <div className='movie-sinopse'>
                                    Sinopse movie
                                </div>
                            </C.About>
                        </C.Card>
                        <button onClick={nextMovie}>Next</button>
                    </C.CardContainer>
                </C.Container> :
                <div><h1>Não há filmes</h1></div>
            }  
        </>
    )
}