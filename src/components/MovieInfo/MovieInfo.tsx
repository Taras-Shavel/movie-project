import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Rating} from 'react-simple-star-rating';

import css from './MovieInfo.module.css'
import {useAppDispatch, useAppSelector} from '../../hooks';
import {moviesAction, videoActions} from '../../redux';
import {Loading} from "../Loading";
import {ThemeContext} from "../../context";


interface MovieDetailProps {
    movie: number;

}

const MovieInfo: React.FC<MovieDetailProps> = ({movie}) => {
    const {theme} = useContext(ThemeContext)
    const dispatch = useAppDispatch();
    const {data, error} = useAppSelector(state => state.moviesReducer);
    const {videos} = useAppSelector(state => state.videoReducer);


    const [isLoading, SetIsLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            SetIsLoading(false);
        }, 0);
    }, []);


    useEffect(() => {
        dispatch(moviesAction.getById(movie));
        console.log(movie)
    }, [dispatch, movie]);

    useEffect(() => {
        dispatch(videoActions.getAll(movie))
    }, [dispatch, movie]);


    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return null;
    }
    const {title, overview, runtime, vote_average, poster_path, tagline, genres, release_date, spoken_languages} = data;


    const baseURL = 'https://image.tmdb.org/t/p/w500'
    const emptyPhoto = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
    const imagePath = poster_path ? `${baseURL}/${poster_path}` : emptyPhoto;
    const tag = tagline === ""


    const spokenLanguages = spoken_languages.map(language => language.english_name).join(', ');

    return (

        <div>
            {isLoading ?

                <Loading/> :
                <div className={`${css.detailMovie} ${theme === 'Light' ? css.Light : css.Dark}`}>
                    <div className={css.imgRating}>
                        <img src={imagePath} className={css.movieImg} alt={title}/>
                        <div id={css.rating}>
                            <Rating initialValue={vote_average}
                                    size={30} readonly={true}
                                    allowFraction={true} iconsCount={10}/>
                            <div className={css.details}>
                                <div className={css.infoRating}>
                                    <h4>Rating: </h4>
                                    <h4>{vote_average}</h4>
                                </div>
                                <div className={css.infoDate}>
                                    <h4>Release: </h4>
                                    <h4>{release_date}</h4>
                                </div>

                                <div className={css.infoTime}>
                                    <h4>Time: </h4>
                                    <h4>{runtime} minutes</h4>
                                </div>

                                <div className={css.infoLangua}>
                                    <h4>Languages: </h4>
                                    <h4>{spokenLanguages}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.blockDescriptionMovie}>
                        <h1>{title}</h1>
                        {
                            tag ? null : <h2>TagLine: {tagline}</h2>
                        }

                        <div id={css.blockGenre}>

                            {
                                genres.map(genre =>
                                    <Link id={css.movieGenre} to={`/genres/${genre.id}`}
                                          key={genre.id}>{genre.name}</Link>)
                            }
                        </div>

                        <div id={css.descriptionMovie}>
                            <h2>OverView:</h2>
                            <p>{overview}</p>
                        </div>
                        <div className={css.mainContainerVideos}>
                            <h2 style={{textAlign: "center", fontSize: '30px'}}>Trailers:</h2>
                            <div className={css.containerVideos}>
                                {videos.slice(0, 6).map(video => (
                                    <div key={video.key} style={{width: '30%', height: '250px'}}>
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={`https://www.youtube.com/embed/${video.key}`}
                                            title={title}
                                            frameBorder="0"
                                            allowFullScreen
                                            style={{borderRadius:'10px'}}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>
                </div>
            }
        </div>
    );
};

export {MovieInfo};