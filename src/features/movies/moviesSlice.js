import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    movies: []
}

const moviesSlice = createSlice({
    name: "movies",
    initialState: initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
            console.log("state.movies", state.movies);
        }
    }
});

export const { setMovies } = moviesSlice.actions;

export const selectMovies = (state) => state.movies.movies ;

export default moviesSlice.reducer;