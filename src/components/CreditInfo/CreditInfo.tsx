import React, {FC, useContext} from 'react';
import {ICreditsDetails} from "../../interface";
import css from "./CreditInfo.module.css"
import {ThemeContext} from "../../context";
import {baseUrlPhoto} from "../../constants";

interface IProps {
    credit: ICreditsDetails
}

const CreditInfo: FC<IProps> = ({credit}) => {
    const {theme} = useContext(ThemeContext);
    const baseURL = 'https://image.tmdb.org/t/p/w500'
    const emptyPhoto = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
    const {original_name, character, profile_path} = credit


    return (

        <div className={`${css.container} ${theme === 'Light' ? css.Light : css.Dark}`}>
            <div className={css.blockName}>
                <h4>{original_name}</h4>
            </div>

            <div className={css.blockImg}>
                <img src={profile_path ? `${baseUrlPhoto}/${profile_path}` : emptyPhoto} alt={original_name}/>
            </div>

            <div className={css.blockCharacter}>
                <h4>{character}</h4>
            </div>
        </div>

    );
};

export {CreditInfo};