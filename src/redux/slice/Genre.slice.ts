import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IGenre} from "../../interface";
import {genreService} from "../../services";
import {IGenresNew} from "../../interface";

interface IGenreState {
    genres: IGenre[];
    loading: boolean;
    error: string | null;
}
let initialState: IGenreState = {
    genres: [],
    loading: false,
    error: null
};

const getAll = createAsyncThunk<IGenresNew, void>(
    'genreSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await genreService.getAll();
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
);

const slice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload.genres
                state.loading = false
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getAll.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message as  string;
            })
    }
});

const {reducer: genreReducer, actions} = slice

const genreActions = {
    ...actions,
    getAll
}

export {
    genreActions,
    genreReducer
}