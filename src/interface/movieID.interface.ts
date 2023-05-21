import {IGenre} from "./genre.interface";


export interface IMovieID {
    title: string;
    overview: string;
    vote_average: number;
    id: string
    poster_path: string;
    genres: IGenre
}