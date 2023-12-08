import React, { FC, useEffect } from 'react';
import { moviesAction} from "../../redux";

import {MovieListCard} from "../MovieListCard";
import css from './MovieList.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";



const MovieList: FC = () => {

    const {movies, currentPage} = useAppSelector((state) => state.moviesReducer);
    const dispatch = useAppDispatch();
    const [_, setQuery] = useSearchParams();


    useEffect(() => {
        setQuery(prev => ({...prev, page: '1'}))
    }, [])

    useEffect(() => {
        dispatch(moviesAction.getAll(+currentPage));
    }, [dispatch]);

    console.log(movies)

    return (
        <div className={css.movieListStyle}>

            {
                movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

export {MovieList};