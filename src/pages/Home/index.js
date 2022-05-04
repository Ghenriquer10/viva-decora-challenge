import React, { useEffect, useState } from 'react'
import apiMovie from '../../services/apiMovies'
import * as C from './style'
import liked from '../../assets/liked.png'
import unliked from '../../assets/unliked.png'
import apiGenres from '../../services/apiGenres'
import {AiFillHeart} from 'react-icons/ai'
import { MovieDetail } from '../../components/MovieDetail'


export default function Home(){
    const imageBaseUrl = process.env.REACT_APP_IMAGEBASE
    const [index, setIndex] = useState(0)
    const [movies, setMovies] = useState('');
    const [genres, setGenres] = useState('');
    const [movieDetail, setMovieDetail] = useState(false);

    useEffect(() => {
        async function loadMovies(){
           const results = await apiMovie.get('sort_by=popularity.desc&page=1') 
           setMovies(results.data.results)
           console.log(results.data.results)
        }
        async function loadGenres(){
            const results = await apiGenres.get('language=pt-BR')
            setGenres(results.data.genres)
        }

        loadMovies()
        loadGenres()
    }, []) 

    function nextMovie(){
        if (index === 19){
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    function generosFunc(generos){
        function filterArray(array, fields, value) {
            array = array.filter((item) => {
                const found = fields.every((field, index) => { 
                    return item[field] && item[field] === value[index]
                })
                return found
            });
            return array;
        }
        const movieGenres = filterArray(genres, ['id'], generos);
        return movieGenres[0].name;
   }

   function handleMovieDetail(){
       setMovieDetail(prev => !prev)
   }

    return(
        <>
            {movies ?
                <C.Container>
                    <MovieDetail
                        movieDetail={movieDetail}
                        setMovieDetail={setMovieDetail}
                    />
                    <C.CardContainer>
                        <C.Card style={{backgroundImage: `url(${imageBaseUrl + movies[index].backdrop_path})`}}>
                            <div className='gradient-effect'>
                                <C.About>
                                    <div className='movie-about'>
                                        <div className='movie-tittle'>
                                            <h2>{movies[index].title}</h2>
                                            <p>Ano: {(movies[index].release_date).slice(0, 4)} - Genêro: {movies && genres ? generosFunc(movies[index].genre_ids) : null}</p>
                                        </div>
                                        <div className='movie-rating'>
                                            <div className='movie-heart'>
                                                <AiFillHeart size={25}/><AiFillHeart size={25}/><AiFillHeart size={25}/><AiFillHeart size={25}/><AiFillHeart size={25}/>
                                            </div>
                                            <p>({movies[index].vote_count} avaliações)</p>
                                        </div>
                                    </div>
                                    <div className='movie-sinopse'>
                                        <p>{movies[index].overview === '' ? "Filme não contém sinopse." : (movies[index].overview).slice(0, 60) + "... "}
                                        {movies[index].overview === '' ? null : <button onClick={handleMovieDetail}>Ver sinopse</button>}</p>
                                    </div>
                                </C.About>
                            </div>
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
                        <h1>Buscando filmes...</h1>
                    </div>
                </C.EmptyMovie>
            }  
        </>
    )
}