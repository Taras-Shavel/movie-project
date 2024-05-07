import {IRes} from "../types";
import {ICredits} from "../interface";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

const creditsService = {
    getAll:(id: number):IRes<ICredits> => axiosService.get(urls.credits(id))
}
export {
    creditsService
}