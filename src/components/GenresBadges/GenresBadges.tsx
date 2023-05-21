import React, {FC, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchGenres, RootState} from "../../redux";
import css from './GenresBadges.module.css'
import GenreBadge from "../GenreBadge/GenreBadge";


const GenresBadges: FC = () => {
    const dispatch = useDispatch();
    const genres = useSelector((state: RootState) => state.genreReducer.genres);
    const [isLoading, SetIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            SetIsLoading(false);
        }, 3000);
    }, []);


    useEffect(() => {
        dispatch(fetchGenres() as any)
    }, [dispatch])

    return (
        <div>
            {
                isLoading ?
                    <div className={css.pageLoader}>
                        <div className={css.loader}></div>
                        <h1>Loading...</h1>
                    </div> :
                    <div className={css.mainPageGenres}>
                        <h1>Choose a movie genre</h1>
                        <div className={css.blockGenreList}>
                            {
                                genres.map(genre => <GenreBadge key={genre.id} genre={genre}/>)
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default GenresBadges;