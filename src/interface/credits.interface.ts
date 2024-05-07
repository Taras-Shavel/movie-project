import {ICreditsDetails} from "./creditsDetails.interface";

export interface ICredits {
    id: number,
    cast: ICreditsDetails[],
}