import {IRes} from "../types";
import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IGenresNew} from "../interface";

const genreService = {
    getAll:(): IRes<IGenresNew> => axiosService.get(urls.genres)
}

export {
    genreService
}