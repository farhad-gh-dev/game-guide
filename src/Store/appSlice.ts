import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type SliderItem } from "game-guide-ui-kit";

export interface AppState {
  loading?: boolean;
  activeCategory?: string | undefined;
  sliderItems?: SliderItem[];
  shoppingCardItems: any[];
  notifications?: any[];
}

const initialState: AppState = {
  loading: false,
  activeCategory: "",
  sliderItems: [],
  shoppingCardItems: [],
  notifications: [1, 2, 3, 4, 5, 6, 7],
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
    toggleItemInShoppingCard: (
      state,
      action: PayloadAction<string | undefined>
    ) => {
      const itemIsInShoppingCard = state.shoppingCardItems?.includes(
        action.payload
      );
      if (!itemIsInShoppingCard) {
        state.shoppingCardItems = [...state.shoppingCardItems, action.payload];
      } else {
        state.shoppingCardItems = state.shoppingCardItems.filter(
          (itemId) => itemId !== action.payload
        );
      }
    },
  },
});

export const { setActiveCategory, setLoadingStatus, toggleItemInShoppingCard } =
  appSlice.actions;

export default appSlice.reducer;
