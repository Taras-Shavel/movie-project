import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading, MovieInfo } from "../../components";

const MovieInfoPage = () => {
    const { movieId } = useParams<{ movieId?: string }>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (movieId !== undefined) {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
            }, 3000);
        }
    }, [movieId]);

    if (!movieId) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {isLoading ? <Loading/> : <MovieInfo movie={+movieId}/>}
        </div>
    );
};

export { MovieInfoPage };
