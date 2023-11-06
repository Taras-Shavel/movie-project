// import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
// import axios from "axios";
// import {IGenre, IGenreState} from "../../interface";
//
// const API_KEY = '441c4f28d810f4abc9fe763d6c2f1490';
//
// export const fetchGenres = createAsyncThunk('genres/fetchGenres', async () => {
//     const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
//     return response.data.genres as IGenre[];
// });
//
// const initialState: IGenreState = {
//     genres: [],
//     loading: false,
//     error: null
// }
//
// const slice = createSlice({
//     name: 'genreSlice/slice',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchGenres.pending, state => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchGenres.fulfilled, (state, action:PayloadAction<IGenre[]>) => {
//                 state.loading = false;
//                 state.genres = action.payload;
//             })
//             .addCase(fetchGenres.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.error.message as  string;
//             })
//     }
// })
// const {actions, reducer: genreReducer} = slice;
//
// const genreActions = {
//     ...actions
// }
//
// export {
//     genreActions,
//     genreReducer
// }

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IGenre} from "../../interface";
import {genreService} from "../../services";
import {IGenresNew} from "../../interface/interfacesNew";

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