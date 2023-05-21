import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchMovies, RootState} from "../../redux";
import {IMovie} from "../../interface";
import MovieListCard from "../MovieListCard/MovieListCard";
import css from './MovieList.module.css'


const MovieList: FC = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state: RootState) => state.movieReducer.movies);

    useEffect(() => {
        dispatch(fetchMovies(1) as any);
    }, [dispatch]);

    return (
        <div className={css.movieListStyle}>
            {movies.map((movie: IMovie) => <MovieListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default MovieList;