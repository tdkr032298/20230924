import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../slice/authSlice";
import itemReducer from "../slice/itemSlice";


export const store = configureStore({
    reducer: {
        auth:authReducer,
        item: itemReducer,

    },
},);



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;