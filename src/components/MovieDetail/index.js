import React, {useRef} from 'react';
import {animated, useSpring} from 'react-spring'
import * as C from './style';

export const MovieDetail = ({movieDetail, setMovieDetail, index, movies}) => {
    
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
    return(
        <>
            {movieDetail ? 
                (<C.Container onClick={closeMovieDetail} ref={detailRef} >
                    <animated.div style={animation}>
                        <C.MovieDetailWrapper>
                            <C.CardDetail>
                                <div className='image-sinopse'><img src={imageBaseUrl + movies[index].poster_path} alt="Imagem poster do filme"/></div>
                                <div>Nome e Detalhe</div>
                                <div>Rating</div>
                                <div>Sinopse</div>
                            </C.CardDetail>
                        </C.MovieDetailWrapper>
                    </animated.div>
                </C.Container>)
            : null}
        </>
    )
}