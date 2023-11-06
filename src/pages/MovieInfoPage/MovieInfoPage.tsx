import React from 'react';
import { useParams } from 'react-router-dom';
import {MovieInfo} from "../../components";


const MovieInfoPage = () => {
    const { movieId } = useParams<{ movieId?: string }>();


    if (movieId === undefined) {
        return <div>Loading...</div>;
    }


    return (
        <div>
            <MovieInfo movie={+movieId}/>

        </div>
    );
};

export {MovieInfoPage};