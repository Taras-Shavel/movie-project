import React, {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

import {MovieListCard} from "../MovieListCard";
import css from './GenreMovies.module.css'
import {Loading} from "../Loading";
import {IMovieNew} from "../../interface";



const GenreMovies: FC = () => {
    const [movies, setMovies] = useState<IMovieNew[]>([]);
    const {genreId} = useParams();
    const [isLoading, SetIsLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            SetIsLoading(false);
        }, 3000);
    }, []);


    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get<{ results: IMovieNew[] }>(
                    'https://api.themoviedb.org/3/discover/movie',
                    {
                        params: {
                            api_key: '441c4f28d810f4abc9fe763d6c2f1490',
                            with_genres: genreId,
                        },
                    }
                );
                setMovies(response.data.results);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovies();
    }, [genreId]);



    return (
        <div>
            {
                isLoading ?

                    <Loading/> :
                    <div style={{marginTop: '100px', marginBottom:'50px'}}>
                        <h1>Movies of Genre:</h1>
                        <div className={css.moviesGenre}>
                            {movies.map((movie) => (
                                <MovieListCard key={movie.id} movie={movie}/>
                            ))}
                        </div>
                    </div>
            }


        </div>
    );
};

export {GenreMovies};