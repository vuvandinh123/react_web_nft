import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name: 'lang',
    initialState: {
        lang: 'en'
    },
    reducers: {
        setLang: (state, payload) => {
            return {
                lang: payload.payload
            }
        },
       
    }
});

export const { setLang } = langSlice.actions;
export default langSlice.reducer;
