import React, {useRef, useEffect} from 'react';
import {animated, useSpring} from 'react-spring'
import * as C from './style';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

export const LikedMovieDetail = ({likedModal, setLikedModal, index, movies, genres}) => {
    
    const detailRef = useRef();

    const imageBaseUrl = process.env.REACT_APP_IMAGEBASE

    useEffect(() => {
        console.log(genres)
    }, [])

    const animation = useSpring({
        config: {
          duration: 550
        },
        opacity: likedModal ? 1 : 0,
        transform: likedModal ? `translateY(0%)` : `translateY(-100%)`
      });

      const closeMovieDetail = e => {
          if (detailRef.current === e.target){
              setLikedModal(false)
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
            {likedModal ? 
                (<C.Container onClick={closeMovieDetail} ref={detailRef} >
                    <animated.div style={animation}>
                        <C.MovieDetailWrapper>
                            <C.CardDetail>
                                <div className='close-button'>
                                    <button onClick={() => setLikedModal(prev => !prev)} className='devEdit'><h1>X</h1></button>
                                </div>
                                <div className='image-movie'>
                                    <img src={imageBaseUrl} alt="Imagem poster do filme"/>
                                </div>
                                <div className='tittle-movie'>
                                    <h1>{}</h1>
                                </div>
                                <div className='release-movie'>
                                    <p>{}</p>
                                </div>
                                <div className='movie-heart'>
                                    <div>
                                        <AiFillHeart size={25}/><AiFillHeart size={25}/><AiFillHeart size={25}/><AiFillHeart size={25}/><AiOutlineHeart size={25}/>
                                    </div>
                                    <div>
                                        <p></p>
                                    </div>
                                </div>
                                <div className='movie-sinopse'>
                                    <p>{}</p>
                                </div>
                            </C.CardDetail>
                        </C.MovieDetailWrapper>
                    </animated.div>
                </C.Container>)
            : null}
        </>
    )
}