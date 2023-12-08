import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieService } from "../../services";
import { IMovieNew, IMoviesNew } from "../../interface";

interface IMovieStateNew {
    movies: IMovieNew[];
    currentPage: number;
    total_page: number;
    loading: boolean;
    error: string | null;
    movie?: IMovieNew;
    data: IMovieNew | null;
}

const initialState: IMovieStateNew = {
    movies: [],
    currentPage: 1,
    total_page: 500,
    loading: false,
    error: null,
    movie: {} as IMovieNew,
    data: null,
};

const getAll = createAsyncThunk<IMoviesNew, number>(
    'moviesSlice/getAll',
    async (currentPage, thunkAPI) => {
        try {
            const { data } = await movieService.getAll(currentPage);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const getById = createAsyncThunk<IMovieNew, number >(
    'moviesSlice/getById',
    async (id, thunkAPI) => {
        try {
            const { data } = await movieService.getById(id);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

const slice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.currentPage = action.payload.page;
            })
            .addCase(getAll.pending, (state) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message as string;
            })

            .addCase(getById.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message as string;
            });
    }
});

const { reducer: moviesReducer, actions } = slice;

const moviesAction = {
    ...actions,
    getAll,
    getById,
};

export {
    moviesAction,
    moviesReducer,
};

