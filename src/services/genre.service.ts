import {IRes} from "../types";
import {IGenre} from "../interface";
import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IGenresNew} from "../interface/interfacesNew";

const genreService = {
    getAll:(): IRes<IGenresNew> => axiosService.get(urls.genres)
}

export {
    genreService
}