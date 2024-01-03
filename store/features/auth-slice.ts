import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
    isAuthenticated: boolean
}

const initialState = {
    isAuthenticated: false
} as AuthState;

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setIsAuthenticated: (state, { payload }: {payload: boolean}) => {
            state.isAuthenticated = payload;
        },
    }
})

export const { setIsAuthenticated } = authSlice.actions;
export default authSlice.reducer;