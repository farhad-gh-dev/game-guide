import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Hooks/store";
import { setActiveCategory, setLoadingStatus } from "../../Store/appSlice";
import { replaceSpaceWithUnderscore } from "../../Helpers/string";

export const useCategory = (userShoppingCartItems?: string[]) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((store) => store.app.loading);
  const categoryItems = useAppSelector((store) => store.app.categoryItems);
  const slidersData = useAppSelector((store) => store.app.slidersData);
  const offerItems = useAppSelector((store) => store.app.offerItems);
  const collectionItems = useAppSelector((store) => store.app.collectionItems);
  const activeCategory = useAppSelector((store) => store.app.activeCategory);

  const urlParams = useParams();
  const targetCategory = urlParams.category?.toLowerCase();
  const targetSliderItems = activeCategory
    ? slidersData[replaceSpaceWithUnderscore(activeCategory)]
    : [];

  const formattedOfferItems = offerItems?.map((item) => {
    return {
      ...item,
      isInBasket: userShoppingCartItems?.includes(item.id),
    };
  });

  useEffect(() => {
    dispatch(setLoadingStatus(true));
    dispatch(setActiveCategory(targetCategory));
    setTimeout(() => {
      dispatch(setLoadingStatus(false));
    }, 1000);
  }, [targetCategory, dispatch]);

  return {
    isLoading,
    categoryItems,
    targetCategory,
    activeCategory,
    targetSliderItems,
    offerItems: formattedOfferItems,
    collectionItems,
  };
};
