import React, { useContext } from 'react'
import * as C from './style'
import logo from '../../assets/logos/logo-viva-decora.png'
import {NavLink} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi';
import { DataContext } from '../../contexts/datas';

export const Header = () => {

    const { setMenuMobile } = useContext(DataContext)

    return(
        <C.Container>
            <C.MenuMobile>
                <GiHamburgerMenu onClick={() => {
                    setMenuMobile(prev => !prev)
                }}/>
            </C.MenuMobile>
            <div className>
                <img src={logo} alt="imagem com a logo da empresa viva decora"/>
            </div>
            <C.MenuDesktop>
                <NavLink to="/" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    Filmes não curados
                </NavLink>

                <NavLink to="/likedMovies" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    Filmes curtidos
                </NavLink>

                <NavLink to="/unlikedMovies" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    Filmes não curtidos
                </NavLink>
            </C.MenuDesktop>
        </C.Container>
    )
}