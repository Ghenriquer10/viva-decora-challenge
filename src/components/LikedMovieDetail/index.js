import React, {useRef} from 'react';
import {animated, useSpring} from 'react-spring'
import * as C from './style';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

export const LikedMovieDetail = ({likedModal, setLikedModal, indexMovie, likedMovies}) => {
    
    const detailRef = useRef();

    const imageBaseUrl = process.env.REACT_APP_IMAGEBASE

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
                                    <img src={imageBaseUrl + likedMovies[indexMovie].poster_path} alt="Imagem poster do filme"/>
                                </div>
                                <div className='tittle-movie'>
                                    <h1>{likedMovies[indexMovie].title}</h1>
                                </div>
                                <div className='release-movie'>
                                    <p>Ano - {(likedMovies[indexMovie].release_date).slice(0, 4)}</p>
                                </div>
                                <div className='movie-heart'>
                                    <div>
                                        <AiFillHeart size={25}/><AiFillHeart size={25}/><AiFillHeart size={25}/><AiFillHeart size={25}/><AiOutlineHeart size={25}/>
                                    </div>
                                    <div>
                                        <p>{likedMovies[indexMovie].vote_count}</p>
                                    </div>
                                </div>
                                <div className='movie-sinopse'>
                                    <p>{(likedMovies[indexMovie].overview).slice(0,430)+'...'}</p>
                                </div>
                            </C.CardDetail>
                        </C.MovieDetailWrapper>
                    </animated.div>
                </C.Container>)
            : null}
        </>
    )
}