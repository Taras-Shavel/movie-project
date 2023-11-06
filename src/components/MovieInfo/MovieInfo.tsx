import React, {useEffect, useState} from 'react';
import { moviesAction} from '../../redux';
import {useAppDispatch, useAppSelector} from '../../hooks';


import css from './MovieInfo.module.css'
import {Link} from "react-router-dom";
import {StarsRating} from "../StarsRating";



interface MovieDetailProps {
    movie: number;

}

const MovieInfo: React.FC<MovieDetailProps> = ({movie}) => {
    const dispatch = useAppDispatch();
    const {data, error} = useAppSelector(state => state.moviesReducer);
    const [isLoading, SetIsLoading] = useState(true);
    // const genre = useAppSelector(state => state.genreReducer.genres);
    // console.log(genre)

    useEffect(() => {
        setTimeout(() => {
            SetIsLoading(false);
        }, 3000);
    }, []);




    useEffect(() => {
        dispatch(moviesAction.getById(movie));
        console.log(movie)
    }, [dispatch, movie]);



    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return null;
    }
    const {title, overview, vote_average, poster_path, genres} = data;
    const baseURL = 'https://image.tmdb.org/t/p/w500'
    const emptyPhoto = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
    const imagePath = poster_path ? `${baseURL}/${poster_path}` : emptyPhoto;
    // let genresArray: IGenre[] = [];



    // if (Array.isArray(data.genre_ids)) {
    //     genresArray = data.genre_ids;
    // } else if (data.genre_ids) {
    //     genresArray = [data.genre_ids];
    // }
    console.log(genres)
    return (

        <div >
            {isLoading ?
                <div className={css.pageLoader}>
                    <div className={css.loader}></div>
                    <h1>Loading...</h1>
                </div> :
                <div className={css.detailMovie}>
                    <div>
                        <img src={imagePath} className={css.movieImg} alt="poster"/>
                    </div>
                    <div className={css.blockDescriptionMovie}>
                        <h1>{title}</h1>
                        <div id={css.blockGenre}>
                            {
                                genres.map(genre =>
                                    <Link id={css.movieGenre} to={`/genres/${genre.id}`}
                                                                         key={genre.id}>{genre.name}</Link>)
                            }
                        </div>
                        <div id={css.descriptionMovie}>
                            <h4>OverView:</h4>
                            <p>{overview}</p>
                        </div>
                        <div id={css.rating}>
                            <h4>Rating:</h4>
                            <StarsRating rating={vote_average}/>
                        </div>

                    </div>
                </div>
            }
        </div>
    );
};

export {MovieInfo};