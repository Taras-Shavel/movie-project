import React, {FC, useState} from 'react';
import css from './mainPage.module.css';

import axios from 'axios';
import {ModalWindow} from "../ModalWindow";
import {IMovieNew} from "../../interface";


const MainPage: FC = () => {
    const [movies, setMovies] = useState<IMovieNew[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleSearch = async () => {
        try {
            const response = await axios.get<{ results: IMovieNew[] }>(
                'https://api.themoviedb.org/3/search/movie',
                {
                    params: {
                        api_key: '441c4f28d810f4abc9fe763d6c2f1490',
                        query: searchQuery,
                    },
                }
            );
            setMovies(response.data.results);
            setShowModal(true); // Додано цей рядок
        } catch (error) {
            console.error(error);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };


    const isButtonDisabled = searchQuery.trim() === '';

    return (
        <div>
            <div className={css.background}>
                <div className={css.mainPage}>
                    <div className={css.description}>
                        <h1 className={css.colorText}>Watch our film everywhere</h1>
                        <h2 className={css.colorText}>Unlimited movies, TV-shows and more...</h2>
                        <div className={css.formSearch}>
                            <input
                                type="text"
                                value={searchQuery}
                                placeholder="Search movie"
                                className={css.searchInput}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button disabled={isButtonDisabled} className={css.searchButton}
                                    onClick={handleSearch}>Search
                            </button>
                        </div>
                        {showModal && (
                            <div className={css.modal}>
                                <div className={css.modalContent}>
                                    <div className={css.buttonClose}>
                                        <button id={css.closeModel} onClick={closeModal}>Х</button>
                                    </div>
                                    <div className={css.titleModal}>
                                        <h2>Search Results</h2>
                                    </div>
                                    <div className={css.scrollModel}>
                                        {
                                            movies.map((movie) =>
                                                <ModalWindow key={movie.id} movie={movie}/>
                                            )}</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
            <div className={css.descriptionPhone}>
                <img src="https://glavcom.ua/img/article/6672/96_main-v1584725543.jpg" className={css.photoPhone} alt="phone"/>
                <div className={css.descriptionBlockPhone}>
                    <h1>Download your shows to watch offline</h1>
                    <h3>Save your favorites easily and always have something to watch.</h3>
                </div>
            </div>
            <div className={css.descriptionPhone}>
                <div className={css.descriptionBlockPhone}>
                    <h1>Watch everywhere</h1>
                    <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
                </div>
                <img src="https://cdn.alza.cz/Foto/or/articles/35022/img/co-je-iptv.jpg" className={css.photoPhone} alt="phone"/>
            </div>

        </div>
    );
};

export {MainPage};