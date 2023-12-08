import React, {useEffect, useState} from 'react';
import {Loading, MoviePagination} from "../../components";
import {MovieList} from "../../components";


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
                    <Loading/>
                    :
                    <div style={{marginTop: '100px', marginBottom:'50px'}}>
                        <MoviePagination/>
                        <MovieList/>
                    </div>
            }

        </div>
    );
};

export {MoviePage};