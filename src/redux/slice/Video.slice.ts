import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IVideoDetails, IVideos } from "../../interface";
import { videosService } from "../../services";

interface IVideoState {
    videos: IVideoDetails[];
}

let initialState: IVideoState = {
    videos: [],
};

const getAll = createAsyncThunk<IVideos, number>(
    'videoSlice/getAll',
    async (id, thunkAPI) => {
        try {
            const { data } = await videosService.getAll(id);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

const slice = createSlice({
    name: 'videoSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.videos = action.payload.results;
        });
    },
});
const {reducer: videoReducer, actions} = slice

const videoActions = {
    ...actions,
    getAll
}

export {
    videoActions,
    videoReducer
}
