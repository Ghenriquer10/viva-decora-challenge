import React, {useRef} from 'react';
import {animated, useSpring} from 'react-spring'
import * as C from './style';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

export const MovieDetail = ({movieDetail, setMovieDetail, index, movies, genres}) => {
    
    const detailRef = useRef();

    const imageBaseUrl = process.env.REACT_APP_IMAGEBASE

    const animation = useSpring({
        config: {
          duration: 550
        },
        opacity: movieDetail ? 1 : 0,
        transform: movieDetail ? `translateY(0%)` : `translateY(-100%)`
      });

      const closeMovieDetail = e => {
          if (detailRef.current === e.target){
              setMovieDetail(false)
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
    return(
        <>
            {movieDetail ? 
                (<C.Container onClick={closeMovieDetail} ref={detailRef} >
                    <animated.div style={animation}>
                        <C.MovieDetailWrapper>
                            <C.CardDetail>
                                <div className='image-movie'>
                                    <img src={imageBaseUrl + movies[index].poster_path} alt="Imagem poster do filme"/>
                                </div>
                                <div className='tittle-movie'>
                                    <h1>{movies[index].title}</h1>
                                </div>
                                <div className='release-movie'>
                                    <p>{(movies[index].release_date).slice(0, 4)} - {movies && genres ? generosFunc(movies[index].genre_ids) : null}</p>
                                </div>
                                <div className='movie-heart'>
                                    <div>
                                        <AiFillHeart size={25}/><AiFillHeart size={25}/><AiFillHeart size={25}/><AiFillHeart size={25}/><AiOutlineHeart size={25}/>
                                    </div>
                                    <div>
                                        <p>({movies[index].vote_count} avaliações)</p>
                                    </div>
                                </div>
                                <div className='movie-sinopse'>
                                    <p>{movies[index].overview === '' ? "Filme não contém sinopse." : 
                                    (movies[index].overview).length > 350 ? (movies[index].overview).slice(0, 350)+'...' : 
                                    (movies[index].overview).slice(0, 350)}</p>
                                </div>
                            </C.CardDetail>
                        </C.MovieDetailWrapper>
                    </animated.div>
                </C.Container>)
            : null}
        </>
    )
}