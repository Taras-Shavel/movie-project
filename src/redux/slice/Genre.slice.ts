import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {IGenre, IGenreState} from "../../interface";

const API_KEY = '441c4f28d810f4abc9fe763d6c2f1490';

export const fetchGenres = createAsyncThunk('genres/fetchGenres', async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
    return response.data.genres as IGenre[];
});

const initialState: IGenreState = {
    genres: [],
    loading: false,
    error: null
}

const slice = createSlice({
    name: 'genreSlice/slice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGenres.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGenres.fulfilled, (state, action:PayloadAction<IGenre[]>) => {
                state.loading = false;
                state.genres = action.payload;
            })
            .addCase(fetchGenres.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message as  string;
            })
    }
})
const {actions, reducer: genreReducer} = slice;

const genreActions = {
    ...actions
}

export {
    genreActions,
    genreReducer
}