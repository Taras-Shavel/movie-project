import {IRes} from "../types";
import {IImages} from "../interface";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

const imagesService = {
    getAll:(id: number):IRes<IImages> => axiosService.get(urls.images(id))
}

export {
    imagesService
}