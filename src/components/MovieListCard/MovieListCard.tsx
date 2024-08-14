import React, {FC, useContext} from 'react';
import {useNavigate} from "react-router";

import css from './MovieListCard.module.css'
import {IMovieNew} from "../../interface";
import {ThemeContext} from "../../context";
import {baseUrlPhoto} from "../../constants";



interface IProps {
    movie: IMovieNew
}
const MovieListCard: FC<IProps> = ({movie}) => {
    const {theme} = useContext(ThemeContext)
    const navigate = useNavigate();

    const {id, title, poster_path} = movie;
    const handleButtonClick = () => {
        navigate(`/movies/${id}`);
    };


    return (
        <div className={`${css.container} ${theme === 'Light' ? css.Light : css.Dark}`} onClick={handleButtonClick}>
            <div className={css.listCard}>
                <img src= {`${baseUrlPhoto}/${poster_path}`} className={css.imgPost} alt="poster"/>
            </div>
            <h3>{title}</h3>

        </div>
    );
};

export {MovieListCard};