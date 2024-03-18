import React, {FC, useContext, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import { moviesAction} from "../../redux";
import {MovieListCard} from "../MovieListCard";
import css from './MovieList.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {ThemeContext} from "../../context";



const MovieList: FC = () => {

    const {movies, currentPage} = useAppSelector((state) => state.moviesReducer);
    const dispatch = useAppDispatch();
    const [_, setQuery] = useSearchParams();
    const {theme} = useContext(ThemeContext)


    useEffect(() => {
        setQuery(prev => ({...prev, page: '1'}))
    }, [])

    useEffect(() => {
        dispatch(moviesAction.getAll(+currentPage));
    }, [dispatch]);

    console.log(movies)

    return (
        <div className={`${css.movieListStyle} ${theme === 'Light' ? css.Light : css.Dark}`}>

            {
                movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

export {MovieList};