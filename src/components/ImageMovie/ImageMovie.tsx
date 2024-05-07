import React, {FC, useContext} from 'react';
import {IImagesDetails} from "../../interface";
import {ThemeContext} from "../../context";
import css from './ImageMovie.module.css'
import {baseUrlPhoto} from "../../constants";

interface IPops {
    image: IImagesDetails
}

const ImageMovie: FC<IPops> = ({image}) => {
    const {file_path} = image
    const {theme} = useContext(ThemeContext);
    const baseURL = 'https://image.tmdb.org/t/p/w500';
    const emptyPhoto = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'



    return (
        <div className={`${css.container} ${theme === 'Light' ? css.Light : css.Dark}`}>
            <div className={css.cardImage}>
                <img className={css.image}
                     src={file_path ? `${baseUrlPhoto}/${file_path}` : ('../../../public/Photo/emptyPhoto.jpg')}
                     alt={'Image Film'}/>

            </div>
        </div>
    );
};

export {ImageMovie};




