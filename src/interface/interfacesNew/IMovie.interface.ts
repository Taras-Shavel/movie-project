import {IGenre} from "./genre.interface";

export interface IMovieNew{
    adult: boolean;
    backdrop_path: string;
    genres: IGenre[];
    id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;

}