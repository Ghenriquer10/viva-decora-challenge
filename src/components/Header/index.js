import React from 'react'
import * as C from './style'
import logo from '../../assets/logos/logo-viva-decora.png'
import {NavLink} from 'react-router-dom'

export default function Header(){
    return(
        <C.Container>
            <div className='logo'>
                <img src={logo} alt="imagem com a logo da empresa viva decora"/>
            </div>
            <div className='menu'>
                
                <NavLink to="/" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    Filmes não curados
                </NavLink>

                <NavLink to="/likedMovies" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    Filmes curtidos
                </NavLink>

                <NavLink to="/unlikedMovies" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    Filmes não curtidos
                </NavLink>
            </div>
        </C.Container>
    )
}