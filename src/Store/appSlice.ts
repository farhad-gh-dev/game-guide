import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  message?: string;
}

const initialState: AppState = {
  message: "hello world",
};

export const appSlice = createSlice({
  name: "app",
  initialState,

  reducers: {
    changeMessage: (state, action: PayloadAction<string>) => {
      state.message = state.message + " / " + action.payload;
    },
  },
});

export const { changeMessage } = appSlice.actions;

export default appSlice.reducer;
