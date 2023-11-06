import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
// import {IMovieID, IMovieIdState} from "../../interface";
//
// const API_KEY = '441c4f28d810f4abc9fe763d6c2f1490';
//
// export const fetchMovie = createAsyncThunk<IMovieID, string>(
//     'movie/fetchMovie',
//     async (movieId) => {
//         const response = await axios.get<IMovieID>(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
//         return response.data;
//     }
// );
//
// const initialState: IMovieIdState = {
//     data: null,
//     loading: false,
//     error: null,
// }
//
// const slice = createSlice({
//         name: 'movieIdSlice/slice',
//         initialState,
//         reducers: {},
//         extraReducers: (builder) => {
//             builder
//                 .addCase(fetchMovie.pending, (state) => {
//                     state.loading = true;
//                     state.error = null;
//                 })
//                 .addCase(fetchMovie.fulfilled, (state, action: PayloadAction<IMovieID>) => {
//                     state.loading = false;
//                     state.data = action.payload;
//                 })
//                 .addCase(fetchMovie.rejected, (state, action) => {
//                     state.loading = false;
//                     state.error = action.error.message ?? 'Error occurred while fetching the movie.';
//                 });
//         },
//     }
// );
// const {actions, reducer:movieIdReducer} = slice;
//
// const movieIdActions = {
//     ...actions
// }
// export {
//     movieIdActions,
//     movieIdReducer
// }

