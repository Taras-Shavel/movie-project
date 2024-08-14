import React, {FC, useContext} from 'react';
import {Link} from 'react-router-dom';

import css from "./Header.module.css"
import {UserInfo} from '../UserInfo';
import {ThemeContext} from "../../context";



const Header: FC = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === 'Dark' ? 'Light' : 'Dark'
        setTheme(newTheme)
    }

    return (
        <div className={`${css.Header} ${theme === 'Light' ? css.Light : css.Dark}`} >
            <div className={css.nameWebSite}>
                <Link to={'/'} id={css.linkWebSite}>
                    MOVIE-HUB
                </Link>

            </div>
            <div className={css.blockLogo}>
                <button onClick={toggleTheme} className={css.toggleTheme}>
                    {theme === 'Dark' ? 'Light Mode' : 'Dark Mode'}
                </button>
                <Link to={'/movieList'} id={css.linkMovieList}>
                    Movie List
                </Link>
                <UserInfo/>
            </div>
        </div>
    );
};

export {Header};
