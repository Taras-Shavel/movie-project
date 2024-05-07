import React, {FC, useContext, useState} from 'react';
import {Link, useSearchParams} from "react-router-dom";

import { moviesAction} from "../../redux";
import css from './pagination.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {ThemeContext} from "../../context";

const MoviePagination: FC = () => {

    const {theme} = useContext(ThemeContext)
    const [, setQuery] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(1);
    const total_page = useAppSelector(state => state.moviesReducer.total_page);
    const dispatch = useAppDispatch();

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            const newPage = currentPage - 1;
            dispatch(moviesAction.getAll(newPage));
            setCurrentPage(newPage);
            setQuery(prevQuery => ({ ...prevQuery, page: newPage.toString() }));
        }
    };

    const handleNextPage = () => {
        const newPage = currentPage + 1;
        dispatch(moviesAction.getAll(newPage));
        setCurrentPage(newPage);
        setQuery(prevQuery => ({ ...prevQuery, page: newPage.toString() }));
    };

    return (
        <div className={`${theme === 'Light' ? css.Light : css.Dark}`}>
            {/*<div className={css.genresStyle}>*/}
            {/*    <Link to={'/genres'} className={css.genres}>Choose a movie genre</Link>*/}
            {/*</div>*/}
            <div className={css.buttonPagination}>
                <button onClick={handlePreviousPage} className={css.button} disabled={currentPage === 1}>
                    Prev Page
                </button>
                <span>{currentPage} of {total_page}</span>
                <button onClick={handleNextPage} className={css.button} disabled={currentPage === total_page}>
                    Next Page
                </button>
            </div>
        </div>
    );
};

export {MoviePagination};
