import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from '@reduxjs/toolkit';
const rootReducer = combineReducers({});
export type RootState = ReturnType<typeof rootReducer>;
import { IuserState } from "../../interface/interface" 



const userSlice = createSlice({
    name: "user",
    initialState: <IuserState>{
        users: []
    },
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
        resetState: (state) => {
            state.users = [];
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload.id);
        },
        changeUser : (state, action) => {
            const {id, firstname, surname, userid, age} = action.payload;
            const point = state.users.find((p) => p.id == id);
            if (point) {
                point.firstname = firstname;
                point.surname = surname;
                point.userid = userid;
                point.age = age;
            }
        }
    }
});

export default userSlice.reducer;
export const { addUser, resetState, deleteUser, changeUser } = userSlice.actions;
