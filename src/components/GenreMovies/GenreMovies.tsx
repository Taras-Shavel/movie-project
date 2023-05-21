import React, {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {IMovie} from '../../interface';
import MovieListCard from "../MovieListCard/MovieListCard";
import css from './GenreMovies.module.css'




const GenreMovies: FC = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
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
                const response = await axios.get<{ results: IMovie[] }>(
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
                    <div className={css.pageLoader}>
                        <div className={css.loader}></div>
                        <h1>Loading...</h1>
                    </div> :
                    <div style={{marginTop: '100px', marginBottom:'50px'}}>
                        <h1>Movies of Genre</h1>
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

export default GenreMovies;