import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovieNew, IMoviesNew} from "../../interface";
import {recommendationsService} from "../../services";
interface IStateRecommendations {
    recommendations: IMovieNew[]
}
const initialState:IStateRecommendations = {
    recommendations: []
};
const getAll = createAsyncThunk<IMoviesNew, number>(
    'recommendationsSlice/getAll',
    async (id, thunkAPI) => {
        try {
            const {data} = await recommendationsService.getAll(id);
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
);
const slice = createSlice({
    name: 'recommendationSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.recommendations = action.payload.results
        })
    }
});
const {reducer: recommendationsReducer, actions} = slice;
const recommendationsAction = {
    ...actions,
    getAll
}
export {
    recommendationsAction,
    recommendationsReducer
}