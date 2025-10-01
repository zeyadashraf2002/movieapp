

import { combineReducers } from "redux"
import langReducer from "./LangReducer"
import themeReducer from "./ThemeReducer"
import favoriteReducer from "./FavReducers"
import MoviesReducer from "./MoviesReducers"
import LoaderReducer from "./LoaderReduer"



export default combineReducers({
    myLangReducer : langReducer,
    myThemeReducer :themeReducer,
    myFavoriteReducer: favoriteReducer,
        myMoviesReducer : MoviesReducer,
    myLoaderReducer: LoaderReducer,
})