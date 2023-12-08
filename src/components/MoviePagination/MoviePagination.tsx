import React, { FC, useState } from 'react';

import { moviesAction} from "../../redux";
import css from './pagination.module.css'
import {Link, useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";

const MoviePagination: FC = () => {

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
        <div>
            <div className={css.genresStyle}>
                <Link to={'/genres'} className={css.genres}>Choose a movie genre</Link>
            </div>
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
