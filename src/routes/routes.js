import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Header} from '../components/Header';
import Home from '../pages/Home';
import LikedMovies from '../pages/LikedMovies';
import UnlikedMovies from '../pages/UnlikedMovies';


const MyRoutes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/likedMovies' element={<LikedMovies/>}/>
                <Route path='/unlikedMovies' element={<UnlikedMovies/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes;