import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {IUser} from "../../../../common/types/users.types";
const initialState = {
    user:null
}

export const authSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        logout: () => initialState,
        setUser: (state, action: PayloadAction<IUser>) => {
          state.user = action.payload;
        },
    }
})

export default authSlice.reducer;
export const { logout, setUser } = authSlice.actions;