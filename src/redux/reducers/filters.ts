import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: 'All',
};

const slice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        update: (state, action) => {
            return { ...state, ...action.payload };
        },

        resetFilters: () => initialState,
    },
})

export default slice.reducer;

export const filtersActions = slice.actions;