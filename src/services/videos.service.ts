import {IRes} from "../types";
import {IVideoDetails, IVideos} from "../interface";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

const videosService = {
    getAll:(id: number): IRes<IVideos> => axiosService.get(urls.videos(id))
}

export {
    videosService
}