import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genreReducer, moviesReducer, videoReducer,} from "./slice";

let rootReducer = combineReducers({
    moviesReducer,
    genreReducer,
    videoReducer,

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