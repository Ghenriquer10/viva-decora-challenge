import React, { useContext, useEffect, useState } from 'react'
import apiMovie from '../../services/apiMovies'
import * as C from './style'
import liked from '../../assets/liked.png'
import unliked from '../../assets/unliked.png'
import apiGenres from '../../services/apiGenres'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { MovieDetail } from '../../components/MovieDetail'
import { toast } from 'react-toastify'
import { MobileHeader } from '../../components/MobileHeader'
import { DataContext } from '../../contexts/datas'


export default function Home(){
    const imageBaseUrl = process.env.REACT_APP_IMAGEBASE
    const [index, setIndex] = useState(0)
    const [movies, setMovies] = useState();
    const [genres, setGenres] = useState();
    const [movieDetail, setMovieDetail] = useState(false);

    const { menuMobile } = useContext(DataContext)

    useEffect(() => {
        async function loadMovies(){
           const results = await apiMovie.get('sort_by=popularity.desc&page=1') 
           setMovies(results.data.results)
        }
        
        async function loadGenres(){
            const results = await apiGenres.get('language=pt-BR')
            setGenres(results.data.genres)
        }
        loadMovies()
        loadGenres()
    }, []) 

    function nextMovie(){
        if (index === movies.length - 1){
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

   function handleLikedMovie(movies, index){
        const savedMovie = localStorage.getItem('likedMovies')
        const unlikedMoviesStorage = localStorage.getItem('unlikedMovies')
        const unlikedMovies = JSON.parse(unlikedMoviesStorage) || []
        const likedMovies = JSON.parse(savedMovie) || [];
        const hasLikedMovie = likedMovies.some((likedMovie) => likedMovie.id === movies[index].id) || unlikedMovies.some((unlikedMovie) => unlikedMovie.id === movies[index].id)

        if(hasLikedMovie){
            toast.warning('Voc?? j?? avaliou esse filme!', {
                theme: 'colored'
            })
            return
        }
        
        likedMovies.push(movies[index])
        localStorage.setItem('likedMovies', JSON.stringify(likedMovies))
        toast.success('Filme curtido com sucesso!', {
            theme: 'colored'
        })
    }
    
    function handleUnlikedMovie(movies, index){
        const savedUnlikeddMovie = localStorage.getItem('unlikedMovies')
        const likedMoviesStorage = localStorage.getItem('likedMovies')
        const likedMovies = JSON.parse(likedMoviesStorage) || []
        const unlikedMovies = JSON.parse(savedUnlikeddMovie) || [];
        const hasUnlikedMovie = unlikedMovies.some((unlikedMovie) => unlikedMovie.id === movies[index].id) || likedMovies.some((likedMovie) => likedMovie.id === movies[index].id)
        
        if(hasUnlikedMovie){
            toast.warning('Voc?? j?? avaliou esse filme!', {
                theme: 'colored'
            })
            return
        }
        
        unlikedMovies.push(movies[index]);
        localStorage.setItem('unlikedMovies', JSON.stringify(unlikedMovies))
        toast.success('Filme descurtido com sucesso!', {
            theme: 'colored'
        })
    }
    
    return(
        <C.Main>
            {movies ?
                <C.Container>
                    {menuMobile ? <MobileHeader/>: null}
                    <MovieDetail
                        movieDetail={movieDetail}
                        setMovieDetail={setMovieDetail}
                        index = {index}
                        movies={movies}
                        genres={genres}
                    />
                    <C.CardContainer>
                        <C.Card style={{backgroundImage: `url(${imageBaseUrl + movies[index].backdrop_path})`}}>
                            <div className='gradient-effect'>
                                <C.About>
                                    <div className='movie-about'>
                                        <div className='movie-tittle'>
                                            <h2>{movies[index].title}</h2>
                                            <p>Ano: {(movies[index].release_date).slice(0, 4)} - Gen??ro: {movies && genres ? generosFunc(movies[index].genre_ids) : null}</p>
                                        </div>
                                        <div className='movie-rating'>
                                            <div className='movie-heart'>
                                                <AiFillHeart size={25}/><AiFillHeart size={25}/><AiFillHeart size={25}/><AiFillHeart size={25}/><AiOutlineHeart size={25}/>
                                            </div>
                                            <p>({movies[index].vote_count} avalia????es)</p>
                                        </div>
                                    </div>
                                    <div className='movie-sinopse'>
                                        <p className='desktop-size'>{movies[index].overview === '' ? "Filme n??o cont??m sinopse." : (movies[index].overview).slice(0, 60) + "... "}</p>
                                        {movies[index].overview === '' ? null : <button className='desktop-size'onClick={handleMovieDetail}>Ver sinopse</button>}
                                        <p className='mobile-size'>{movies[index].overview === '' ? "Filme n??o cont??m sinopse." : (movies[index].overview).slice(0, 20) + "... "}</p>
                                        {movies[index].overview === '' ? null : <button className='mobile-size' onClick={handleMovieDetail}>Ver sinopse</button>}
                                    </div>
                                </C.About>
                            </div>
                        </C.Card>
                        <C.Buttons>
                            <button onClick={(e) =>  handleUnlikedMovie(movies, index)} className='choose-liked'><img src={unliked} alt='imagem de dedo para baixo'/><p>N??o curti!</p></button>
                            <button className='next' onClick={nextMovie}><p>Pular</p></button>
                            <button onClick={(e) => handleLikedMovie(movies, index)} className='choose-liked'><img src={liked} alt='imiagem de dedo para cima'/><p>Curti!</p></button>
                        </C.Buttons>
                    </C.CardContainer>
                </C.Container> :
                <C.EmptyMovie>
                    <div>
                        <h1>Buscando filmes...</h1>
                    </div>
                </C.EmptyMovie>
            }  
        </C.Main>
    )
}