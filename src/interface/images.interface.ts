import * as fs from "fs";

export interface IImages {
    id: number,
    backdrops:IImagesDetails[],
    posters: IImagesDetails[]
}
export interface IImagesDetails {
    height: number,
    width: number,
    file_path:string
}