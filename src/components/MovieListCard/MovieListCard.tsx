import React, {FC} from 'react';

import css from './MovieListCard.module.css'
import {useNavigate} from "react-router";
import {IMovieNew} from "../../interface";



interface IProps {
    movie: IMovieNew
}
const MovieListCard: FC<IProps> = ({movie}) => {
    const {id, title, poster_path} = movie;
    const baseURL = 'https://image.tmdb.org/t/p/w500'
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate(`/movies/${id}`);
    };


    return (
        <div className={css.container} onClick={handleButtonClick}>
            <div className={css.listCard}>
                <img src= {`${baseURL}/${poster_path}`} className={css.imgPost} alt="poster"/>
            </div>
            <h3>{title}</h3>

        </div>
    );
};

export {MovieListCard};