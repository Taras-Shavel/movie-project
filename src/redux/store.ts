import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {creditsReducer, genreReducer, imagesReducer, moviesReducer, videoReducer,} from "./slice";
import {recommendationsReducer} from "./slice/Recommendations.slice";

let rootReducer = combineReducers({
    moviesReducer,
    genreReducer,
    videoReducer,
    creditsReducer,
    imagesReducer,
    recommendationsReducer
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