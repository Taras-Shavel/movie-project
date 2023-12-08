import React, {FC} from 'react';


import css from './ModalWindow.module.css'
import {useNavigate} from "react-router";
import {IMovieNew} from "../../interface";


interface IProps {
    movie: IMovieNew;

}

const ModalWindow: FC<IProps> = ({movie}) => {
    const {title, poster_path, id} = movie;
    const baseURL = 'https://image.tmdb.org/t/p/w500'
    const emptyPhoto = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
    const imagePath = poster_path ? `${baseURL}/${poster_path}` : emptyPhoto;
    const navigate = useNavigate()
    const handleButtonClick = () => {
        navigate(`/movies/${id}`);
    };

    return (
        <div className={css.movie} onClick={handleButtonClick}>
            <div className={css.listCard}>
                <img src={imagePath} className={css.imgPost} alt="poster"/>
            </div>
            <h3>{title}</h3>


        </div>
    );
};

export {ModalWindow};