import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {IMovie, IMovieState} from "../../interface";

const API_KEY = '441c4f28d810f4abc9fe763d6c2f1490'
export  const fetchMovies = createAsyncThunk('movies/fetchMovies', async(page: number) =>{
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?page=${page}&api_key=${API_KEY}`);
    return {
        movies: response.data.results as IMovie[],
        page,
    }
});

const initialState: IMovieState = {
    movies: [],
    loading: false,
    error: null,
    currentPage: 1,
    totalPage: 500,
    movie: {} as IMovie
}

const slice = createSlice({
    name: 'movieSlice/slice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<{movies: IMovie[]; page: number}>) => {
                state.loading = false;
                state.movies = action.payload.movies;
                state.currentPage = action.payload.page
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message as string;
            })
    }
})
const {actions, reducer: movieReducer} = slice;

const movieActions = {
    ...actions,
}
export {
    movieReducer,
    movieActions
}




