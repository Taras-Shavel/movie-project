import React, {FC, useContext, useCallback} from 'react';
import {IMovieNew} from "../../interface";
import {ThemeContext} from "../../context";
import css from './Recommendation.module.css';
import {useNavigate} from "react-router-dom";
import {baseUrlPhoto} from "../../constants";

interface IProps {
    recom: IMovieNew;
}

const Recommendation: FC<IProps> = ({recom}) => {
    const {theme} = useContext(ThemeContext);
    const navigate = useNavigate();

    const {id, title, poster_path} = recom;
    // const baseURL = 'https://image.tmdb.org/t/p/w500';
    const emptyPhoto = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'

    const handle = () => {
        navigate(`/movies/${id}`);
    }

    return (
        <div onClick={handle} className={`${css.container} ${theme === 'Light' ? css.Light : css.Dark}`}>
            <div className={css.blockContainer}>
                <img src={poster_path ? `${baseUrlPhoto}/${poster_path}` : emptyPhoto} className={css.imgPost} alt={title}/>
                <div className={css.blockTitle}>
                    <h4>{title}</h4>
                </div>
            </div>

        </div>
    );
};

export {Recommendation};
