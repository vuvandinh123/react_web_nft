import langSlice from "./langSlice";
import { configureStore,combineReducers } from "@reduxjs/toolkit";
const reducer = combineReducers({
    lang:langSlice,
})
const store = configureStore({
    reducer,
}) 
export default store