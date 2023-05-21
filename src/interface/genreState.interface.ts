import {IGenre} from "./genre.interface";

export interface IGenreState {
    genres: IGenre[];
    loading: boolean;
    error: string | null;
}