import React from 'react';
import css from './Loading.module.css'

const Loading = () => {

    return (
        <div className={css.container}>
            <div className={css.ring}></div>
            <div className={css.ring}></div>
            <div className={css.ring}></div>
            <span className={css.loading}>Loading...</span>
        </div>
    );
};

export {Loading};