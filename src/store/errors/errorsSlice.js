import { createSlice } from "@reduxjs/toolkit";

const errorsSlice = createSlice({
    name: "errors",
    initialState: {errors:[]},
    reducers: {
        clearErrors(state,action) {
            state.errors = [];
        },
        handleErrors(state,action) {
            const reason = action.reason || action.payload;
            state.errors.concat([reason]);
        }
    }
});

export const { clearErrors, handleErrors } = errorsSlice.actions;
export default errorsSlice.reducer;
