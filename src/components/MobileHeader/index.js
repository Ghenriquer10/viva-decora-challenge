import React, { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import { GrPrevious } from 'react-icons/gr'
import { DataContext } from '../../contexts/datas'
import * as C from './style'

import {useSpring, animated} from 'react-spring'




export const MobileHeader = () => {

    const { setMenuMobile } = useContext(DataContext)

    function handleExitMenu(){
        setMenuMobile(prev => !prev)
    }

    const animation = useSpring({
        from: {
            position: 'absolute',
            top: '0',
            translateX: '-100%'
        },
        to: {
            position: 'absolute',
            top: '0',
            height: '100vh',
            width: '100%',
            translateX: '0%',
        }        
    })

    return(
        <>
        <animated.div style={animation}>
                <C.Container style={{zIndex: '99999'}}>
                        <C.MenuMobile>
                            <div onClick={handleExitMenu} className='btn-exit'>
                                <GrPrevious/>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <NavLink onClick={handleExitMenu} to="/" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                                            <p>Filmes não curados</p>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink onClick={handleExitMenu} to="/likedMovies" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                                            <p>Filmes curtidos</p>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink onClick={handleExitMenu} to="/unlikedMovies" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                                            <p>Filmes não curtidos</p>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </C.MenuMobile>
                </C.Container>:null  
        </animated.div>
        </>
    )
}