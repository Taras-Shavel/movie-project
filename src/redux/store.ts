import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {genreReducer, movieIdReducer, movieReducer} from "./slice";

let rootReducer = combineReducers({
    movieReducer,
    genreReducer,
    movieIdReducer,

});
const setupStore = () => configureStore({
    reducer: rootReducer
})
type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']

export type {
    RootState,
    AppStore,
    AppDispatch
}

export {
    setupStore
}