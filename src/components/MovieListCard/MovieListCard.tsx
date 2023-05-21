import React, {FC} from 'react';
import {IMovie} from "../../interface";
import css from './MovieListCard.module.css'
import {useNavigate} from "react-router";
import StarsRating from "../StarsRating/StarsRating";

interface IProps {
    movie: IMovie
}
const MovieListCard: FC<IProps> = ({movie}) => {
    const {id, title, vote_average, poster_path} = movie;
    const baseURL = 'https://image.tmdb.org/t/p/w500'
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate(`/movies/${id}`);
    };


    return (
        <div className={css.listCard} onClick={handleButtonClick}>
            <h4>{title}</h4>
            <img src= {`${baseURL}/${poster_path}`} className={css.imgPost} alt="poster"/>
            <StarsRating rating={vote_average}/>

        </div>
    );
};

export default MovieListCard;