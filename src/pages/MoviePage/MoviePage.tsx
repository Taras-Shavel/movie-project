import React, {useEffect, useState} from 'react';
import {MoviePagination} from "../../components";
import {MovieList} from "../../components";
import './moviePage.style.css'

const MoviePage = () => {
    const [isLoading, SetIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            SetIsLoading(false);
        }, 3000);
    }, []);

    return (
        <div>
            {
                isLoading ?
                    <div className="page-loader">
                        <div className="loader"></div>
                        <h1>Loading...</h1>
                    </div>  :
                    <div style={{marginTop: '100px', marginBottom:'50px'}}>
                        <MoviePagination/>
                        <MovieList/>
                    </div>
            }

        </div>
    );
};

export {MoviePage};