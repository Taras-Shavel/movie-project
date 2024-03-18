import React, {useContext} from 'react';

import css from './Loading.module.css'
import {ThemeContext} from "../../context";

const Loading = () => {
const {theme} = useContext(ThemeContext);
    return (
        <div className={`${css.container} ${theme === 'Light' ? css.Light : css.Dark}`}>
            <div className={css.ring}></div>
            <div className={css.ring}></div>
            <div className={css.ring}></div>
            <span className={css.loading}>Loading...</span>
        </div>
    );
};

export {Loading};