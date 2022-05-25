import React, { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import { GrPrevious } from 'react-icons/gr'

import * as C from './style'
import { DataContext } from '../../contexts/datas'

export const MobileHeader = () => {

    const {setMenuMobile} = useContext(DataContext)

    function handleExitMenu(){
        setMenuMobile(prev => !prev)
    }

    return(
        <>
            <C.Container>
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
        </>
    )
}