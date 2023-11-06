import React, {FC} from 'react';
import {IMovie} from "../../interface";

import css from './ModalWindow.module.css'
import {useNavigate} from "react-router";
import {StarsRating} from "../StarsRating";


interface IProps {
    movie: IMovie;

}

const ModalWindow: FC<IProps> = ({movie}) => {
    const {title, poster_path, vote_average, id} = movie;
    const baseURL = 'https://image.tmdb.org/t/p/w500'
    const emptyPhoto = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
    const imagePath = poster_path ? `${baseURL}/${poster_path}` : emptyPhoto;
    const navigate = useNavigate()
    const handleButtonClick = () => {
        navigate(`/movies/${id}`);
    };

    return (
        <div className={css.movie} onClick={handleButtonClick}>
            <h3>{title}</h3>
            <img src={imagePath} className={css.imgPost} alt="poster"/>
            <StarsRating rating={vote_average}/>

        </div>
    );
};

export {ModalWindow};