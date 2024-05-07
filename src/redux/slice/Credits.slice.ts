import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ICredits, ICreditsDetails} from "../../interface";
import {creditsService} from "../../services";

interface IStateCredits {
    credits: ICreditsDetails[]
}

const initialState: IStateCredits = {
    credits: []
};
const getAll = createAsyncThunk<ICredits, number>(
    'creditsSlice/getAll',
    async (id, thunkAPI) => {
        try {
            const {data} = await creditsService.getAll(id);
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);
const slice = createSlice({
    name: 'creditsSlice',
    initialState,
    reducers: {},
extraReducers: builder => {
        builder.addCase(getAll.fulfilled,  (state, action) => {
            state.credits = action.payload.cast
        })
}
});
const {reducer: creditsReducer, actions} = slice;

const creditsAction = {
    ...actions,
    getAll
}

export {
    creditsAction,
    creditsReducer
}