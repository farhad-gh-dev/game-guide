import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type SliderItem } from "game-guide-ui-kit";

export interface AppState {
  loading?: boolean;
  activeCategory?: string | undefined;
  sliderItems?: SliderItem[];
}

const initialState: AppState = {
  loading: false,
  activeCategory: "",
  sliderItems: [],
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
    setLoadingStatus: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.loading = true;
      } else {
        state.loading = false;
      }
    },
  },
});

export const { setActiveCategory, setLoadingStatus } = appSlice.actions;

export default appSlice.reducer;
