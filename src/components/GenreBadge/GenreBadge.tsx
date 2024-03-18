import React, {FC, useContext} from 'react';
import {Link} from "react-router-dom";

import css from './GenreBadge.module.css'
import {IGenre} from "../../interface";
import {ThemeContext} from "../../context";

interface IProps {
    genre: IGenre;

}


const GenreBadge: FC<IProps> = ({genre}) => {
    const {theme} = useContext(ThemeContext)
    const {id, name} = genre;


    return (
        <div>
            <Link className={`${css.genreStyle} ${theme === 'Light' ? css.Light : css.Dark}`} to={`/genres/${id.toString()}`}>{name}</Link>
        </div>
    );
};

export {GenreBadge};