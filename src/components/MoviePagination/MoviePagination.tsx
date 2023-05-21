import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchMovies, RootState} from "../../redux";
import css from './pagination.module.css'
import {Link} from "react-router-dom";

const Pagination: FC = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const totalPage = useSelector((state: RootState) => state.movieReducer.totalPage);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            dispatch(fetchMovies(currentPage - 1) as any);
        }
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
        dispatch(fetchMovies(currentPage + 1) as any);
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
                <span>{currentPage} of {totalPage}</span>
                <button onClick={handleNextPage} className={css.button} disabled={currentPage === totalPage}>
                    Next Page
                </button>
            </div>
        </div>
    );
};

export default Pagination;