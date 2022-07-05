import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  activeCategory?: string | undefined;
  message?: string;
}

const initialState: AppState = {
  activeCategory: "",
  message: "hello world",
};

export const appSlice = createSlice({
  name: "app",
  initialState,

  reducers: {
    setActiveCategory: (state, action: PayloadAction<string | undefined>) => {
      if (state.activeCategory !== action.payload) {
        state.activeCategory = action.payload;
      }
    },
    changeMessage: (state, action: PayloadAction<string>) => {
      state.message = state.message + " / " + action.payload;
    },
  },
});

export const { setActiveCategory, changeMessage } = appSlice.actions;

export default appSlice.reducer;
