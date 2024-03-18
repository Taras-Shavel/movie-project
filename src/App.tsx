import React, {useContext, useEffect} from 'react';
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout";
import {MainPage} from "./components/MainPage";
import {GenreMoviesPage, MovieInfoPage, MoviePage} from "./pages";
import {GenresBadges} from "./components";
import './App.css'
import {ThemeContext} from "./context";


function App() {
    const {theme} = useContext(ThemeContext)

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <div className={`${theme === 'Light' ? 'Light' : 'Dark'}`}>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/movieList'} element={<MoviePage/>}/>
                    <Route path={'/genres'} element={<GenresBadges/>}/>
                    <Route path={'/genres/:genreId'} element={<GenreMoviesPage/>}/>
                    <Route path={'/movies/:movieId'} element={<MovieInfoPage/>}/>
                </Route>
            </Routes>
        </div>


    );
}

export default App;
