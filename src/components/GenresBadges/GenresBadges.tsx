import React, {FC, useContext, useEffect, useState} from 'react';

import {genreActions, RootState} from "../../redux";
import css from './GenresBadges.module.css'
import {GenreBadge} from "../GenreBadge";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {Loading} from "../Loading";
import {ThemeContext} from "../../context";


const GenresBadges: FC = () => {
    const dispatch = useAppDispatch();
    const {theme} = useContext(ThemeContext)
    const {genres} = useAppSelector((state: RootState) => state.genreReducer);
    const [isLoading, SetIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            SetIsLoading(false);
        }, 3000);
    }, []);


    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [dispatch])
    console.log(genres)
    return (
        <div>
            {
                isLoading ?
                    <Loading/>
                    :
                    <div className={`${css.mainPageGenres} ${theme === 'Light' ? css.Light : css.Dark}`}>
                        <h1>Choose a movie genre</h1>
                        <div className={css.blockGenreList}>
                            {
                                genres.map(genre => <GenreBadge key={genre.id} genre={genre}/>)
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export {GenresBadges};