import {IMovie} from "./movie.interface";

export interface IMovieState{
    movies: IMovie[];
    loading: boolean;
    error: string | null;
    currentPage: number;
    totalPage: number;
    movie?: IMovie;
}