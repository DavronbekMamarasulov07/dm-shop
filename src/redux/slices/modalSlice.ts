import  { PayloadAction, createSlice } from "@reduxjs/toolkit";


type TInitialState = {
  authOpen: boolean
}
const initialState: TInitialState = {
  authOpen: false
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openAuth: (state,action : PayloadAction<boolean>) => {
      state.authOpen = action.payload;
    },
    
  }
});

export const {openAuth} = modalSlice.actions;
export default modalSlice.reducer