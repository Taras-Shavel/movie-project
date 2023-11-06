import {IRes} from "../types";
import {IMovieNew, IMoviesNew} from "../interface/interfacesNew";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

const movieService = {
    getAll: (page = 1):IRes<IMoviesNew> => axiosService.get(urls.discover.discover, {params: {page}}),
    getById: (id:number):IRes<IMovieNew> => axiosService.get(urls.discover.byId(id))
}

export {
    movieService
}