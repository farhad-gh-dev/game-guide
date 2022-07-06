import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type SliderItem } from "game-guide-ui-kit";
import dummyData from "../DummyData";

export interface AppState {
  loading?: boolean;
  activeCategory?: string | undefined;
  sliderItems?: SliderItem[];
}

const initialState: AppState = {
  loading: false,
  activeCategory: "",
  sliderItems: dummyData.sliderItems["action"],
};

export const appSlice = createSlice({
  name: "app",
  initialState,

  reducers: {
    setActiveCategory: (state, action: PayloadAction<string | undefined>) => {
      if (state.activeCategory !== action.payload) {
        state.loading = true;
        state.activeCategory = action.payload;
        setTimeout(() => {
          state.loading = false;
        }, 300);
      }
    },
  },
});

export const { setActiveCategory } = appSlice.actions;

export default appSlice.reducer;
