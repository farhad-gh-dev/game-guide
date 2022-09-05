import { useAppDispatch, useAppSelector } from "./store";
import { toggleItemInShoppingCart } from "../Store/appSlice";
import { useCallback } from "react";

export const useUserInfo = () => {
  const dispatch = useAppDispatch();
  const userProfileInfo = useAppSelector((store) => store.app.userProfileInfo);
  const userNotifications = useAppSelector((store) => store.app.notifications);
  const userShoppingCartItems = useAppSelector(
    (store) => store.app.shoppingCartItems
  );

  const handleToggleItemInShoppingCart = useCallback(
    (id?: string) => {
      dispatch(toggleItemInShoppingCart(id));
    },
    [dispatch]
  );

  return {
    userProfileInfo,
    userNotifications,
    userShoppingCartItems,
    handleToggleItemInShoppingCart,
  };
};
