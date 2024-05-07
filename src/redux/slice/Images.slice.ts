import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IImages, IImagesDetails} from "../../interface";
import {imagesService} from "../../services";

interface IStateImages {
    images: IImagesDetails[]
    posters: IImagesDetails[]
}

const initialState: IStateImages = {
    images: [],
    posters: []
};

const getAll = createAsyncThunk<IImages,  number>(
    'iagesSlice/getAll',
    async (id, thunkAPI) => {
        try {
            const {data} = await imagesService.getAll(id);
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
);


const slice = createSlice({
    name: 'imagesSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.images = action.payload.backdrops
            state.posters = action.payload.posters
        })
    }
});
const {reducer: imagesReducer, actions} = slice;

const imagesAction = {
    ...actions,
    getAll
}

export {
    imagesReducer,
    imagesAction
}