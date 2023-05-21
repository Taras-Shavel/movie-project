import React, {useEffect, useState} from 'react';
import {fetchMovie, RootState} from '../../redux';
import {useAppDispatch, useAppSelector} from '../../hooks';

import {IGenre} from "../../interface";
import css from './MovieInfo.module.css'
import {Link} from "react-router-dom";
import StarsRating from "../StarsRating/StarsRating";



interface MovieDetailProps {
    movie: string;

}

const MovieInfo: React.FC<MovieDetailProps> = ({movie}) => {
    const dispatch = useAppDispatch();
    const {data, error} = useAppSelector((state: RootState) => state.movieIdReducer);
    const [isLoading, SetIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            SetIsLoading(false);
        }, 3000);
    }, []);




    useEffect(() => {
        dispatch(fetchMovie(movie));
    }, [dispatch, movie]);


    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return null;
    }
    const {title, overview, vote_average, poster_path} = data;
    const baseURL = 'https://image.tmdb.org/t/p/w500'
    const emptyPhoto = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
    const imagePath = poster_path ? `${baseURL}/${poster_path}` : emptyPhoto;
    let genresArray: IGenre[] = [];

    if (Array.isArray(data.genres)) {
        genresArray = data.genres;
    } else if (data.genres) {
        genresArray = [data.genres];
    }

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
                                genresArray.map((genre: IGenre) =>
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

export default MovieInfo;