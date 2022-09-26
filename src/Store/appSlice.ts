import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type SliderItemType } from "game-guide-ui-kit";
import { type RootState } from "./index";
import dummyData, {
  type categoryItemsType,
  type categoryTabsType,
  type offerItemsType,
  type slidersDataType,
  type UserInfoType,
} from "../DummyData";

export interface AppState {
  loading?: boolean;
  userProfileInfo?: UserInfoType;
  categoryItems?: categoryItemsType;
  slidersData?: slidersDataType;
  offerItems?: offerItemsType;
  collectionItems?: categoryTabsType;
  activeCategory?: string | undefined;
  sliderItems?: SliderItemType[];
  shoppingCartItems: any[];
  notifications?: any[];
}

const initialState: AppState = {
  loading: false,
  userProfileInfo: dummyData.userProfile,
  categoryItems: dummyData.categoryItems,
  slidersData: dummyData.slidersData,
  offerItems: dummyData.offerItems,
  collectionItems: dummyData.categoryTabs,
  activeCategory: "",
  sliderItems: [],
  shoppingCartItems: [],
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
    toggleItemInShoppingCart: (
      state,
      action: PayloadAction<string | undefined>
    ) => {
      const itemIsInShoppingCart = state.shoppingCartItems?.includes(
        action.payload
      );
      if (!itemIsInShoppingCart) {
        state.shoppingCartItems = [...state.shoppingCartItems, action.payload];
      } else {
        state.shoppingCartItems = state.shoppingCartItems.filter(
          (itemId) => itemId !== action.payload
        );
      }
    },
  },
});

export const { setActiveCategory, setLoadingStatus, toggleItemInShoppingCart } =
  appSlice.actions;

export const getAppState = (state: RootState) => state.app;

export default appSlice.reducer;
