import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    name: "",
    email: "",
    photo: "",
    user_id: "",
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            console.log("payload", action.payload);
            state.name = action.payload.user;
            console.log(" In state: username = ", state.name);
            state.email = action.payload.email;
            state.photo = action.payload.photo;
            state.user_id = action.payload.user_id;
        },
        setSignOutState: state => {
            state.name = null;
            state.email = null;
            state.photo = null;
            state.user_id = null;
        },
    }
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = state => state.user.name;
export const selectUserEmail = state => state.user.email;
export const selectUserPhoto = state => state.user.photo;
export const selectUserId = state => state.user.user_id;

export default userSlice.reducer;