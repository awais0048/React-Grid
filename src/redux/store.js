import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import CountrySlice from "./CountrySlice";
const store= configureStore({
reducer :{
    Country:CountrySlice.reducer,
    middleware:  getDefaultMiddleware(),
},
})

export default store;