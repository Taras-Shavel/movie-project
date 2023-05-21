import React from 'react';
import MoviePage from "./pages/MoviePage/MoviePage";
import {Route, Routes} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import MainPage from "./components/MainPage/MainPage";
import MovieInfoPage from "./pages/MovieInfoPage/MovieInfoPage";
import GenresBadges from "./components/GenresBadges/GenresBadges";
import GenreMovies from "./components/GenreMovies/GenreMovies";


function App() {

    return (


        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<MainPage/>}/>
                <Route path={'/movieList'} element={<MoviePage/>}/>
                <Route path={'/genres'} element={<GenresBadges/>}/>
                <Route path={'/genres/:genreId'} element={<GenreMovies/>}/>
                <Route path={'/movies/:movieId'} element={<MovieInfoPage/>}/>
            </Route>
        </Routes>


    );
}

export default App;
