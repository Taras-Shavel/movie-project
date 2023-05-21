import {IMovieID} from "./movieID.interface";

export interface IMovieIdState{
    data: IMovieID | null;
    loading: boolean;
    error: string | null;
}