
import {IMovieNew} from "./movie.interface";

export interface IMoviesNew {
    page: number;
    results: IMovieNew[];
    total_pages: number;
    total_results: number;
}

