import React, {FC, useContext} from 'react';
import {IGenre} from "../../interface";
import css from './GenreBadge.module.css'
import {Link} from "react-router-dom";


interface IProps {
    genre: IGenre;

}


const GenreBadge: FC<IProps> = ({genre}) => {
    const {id, name} = genre;


    return (
        <div>
            <Link className={css.genreStyle} to={`/genres/${id.toString()}`}>{name}</Link>
        </div>
    );
};

export default GenreBadge;