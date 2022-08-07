import { useAppDispatch, useAppSelector } from "./store";
import { toggleItemInShoppingCard } from "../Store/appSlice";

export const useUserInfo = () => {
  const dispatch = useAppDispatch();
  const userNotifications = useAppSelector((store) => store.app.notifications);
  const userShoppingCardItems = useAppSelector(
    (store) => store.app.shoppingCardItems
  );

  const handleToggleItemInShoppingCard = (id?: string) => {
    dispatch(toggleItemInShoppingCard(id));
  };

  return {
    userNotifications,
    userShoppingCardItems,
    handleToggleItemInShoppingCard,
  };
};
