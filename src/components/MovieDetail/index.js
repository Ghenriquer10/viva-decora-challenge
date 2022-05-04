import React, {useRef} from 'react';
import {animated, useSpring} from 'react-spring'
import * as C from './style';

export const MovieDetail = ({movieDetail, setMovieDetail}) => {
    
    const detailRef = useRef();

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
                            <h1>Olá</h1>
                        </C.MovieDetailWrapper>
                    </animated.div>
                </C.Container>)
            : null}
        </>
    )
}