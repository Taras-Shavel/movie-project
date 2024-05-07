import React, {useContext, useEffect, useState} from 'react';
import {Loading, MoviePagination} from "../../components";
import {MovieList} from "../../components";
import css from './MoviePage.module.css'
import {ThemeContext} from "../../context";
import {Link} from "react-router-dom";


const MoviePage = () => {
    const [isLoading, SetIsLoading] = useState(true);
    const {theme} = useContext(ThemeContext)

    useEffect(() => {
        setTimeout(() => {
            SetIsLoading(false);
        }, 3000);
    }, []);

    return (
        <div>
            {
                isLoading ?
                    <Loading/>
                    :
                    <div className={`${css.container} ${theme === 'Light' ? css.Light : css.Dark}`}>
                        <div className={css.genresStyle}>
                            <Link to={'/genres'} className={css.genres}>Choose a movie genre</Link>
                        </div>
                        <MovieList/>
                        <MoviePagination/>
                    </div>
            }

        </div>
    );
};

export {MoviePage};