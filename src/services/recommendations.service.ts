import {IRes} from "../types";
import {IMovieNew, IMoviesNew} from "../interface";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

const recommendationsService = {
    getAll:(id: number):IRes<IMoviesNew> => axiosService.get(urls.recommendations(id))
}

export {
    recommendationsService
}