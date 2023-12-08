import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layout";
import {MainPage} from "./components/MainPage";
import {MovieInfoPage, MoviePage} from "./pages";
import {GenreMovies, GenresBadges} from "./components";


function App() {

    return (


            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/movieList'} element={<MoviePage/>}/>
                    <Route path={'/genres'} element={<GenresBadges/>}/>
                    <Route path={'/genres/:genreId'} element={<GenreMovies/>}/>
                    <Route path={'/movies/:movieId'} element={<MovieInfoPage/>}/>
                </Route>
            </Routes>



    );
}

export default App;
