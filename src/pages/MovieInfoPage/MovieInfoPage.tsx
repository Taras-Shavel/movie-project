import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Loading, MovieInfo} from "../../components";


const MovieInfoPage = () => {
    const {movieId} = useParams<{ movieId?: string }>();
    const [isLoading, SetIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            SetIsLoading(false);
        }, 3000);
    }, []);


    if (movieId === undefined) {
        return <div>Loading...</div>;
    }


    return (
        <div>
            {
            isLoading ?
                <Loading/>
                :
                <MovieInfo movie={+movieId}/>
        }


        </div>
    );
};

export {MovieInfoPage};