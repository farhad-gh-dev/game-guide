import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Hooks/store";
import { setActiveCategory, setLoadingStatus } from "../../Store/appSlice";
import helpers from "../../Helpers";

export const useCategory = (userShoppingCartItems?: string[]) => {
  const isInitialMount = useRef(true);

  const dispatch = useAppDispatch();
  const slidersData = useAppSelector((store) => store.app.slidersData);
  const activeCategory = useAppSelector((store) => store.app.activeCategory);
  const isLoading = useAppSelector((store) => store.app.loading);
  const categoryItems = useAppSelector((store) => store.app.categoryItems);
  const offerItems = useAppSelector((store) => store.app.offerItems);
  const collectionItems = useAppSelector((store) => store.app.collectionItems);

  const urlParams = useParams();
  const targetCategory = urlParams.category?.toLowerCase();
  const categoryIsNotValid = !Object.keys(slidersData).includes(
    helpers.string.replaceSpaceWithUnderscore(targetCategory)
  );

  const targetSliderItems =
    slidersData[helpers.string.replaceSpaceWithUnderscore(activeCategory)];

  const formattedOfferItems = offerItems?.map((item) => {
    return {
      ...item,
      isInBasket: userShoppingCartItems?.includes(item.id),
    };
  });

  const formattedTargetSliderItems = targetSliderItems?.map((item: any) => {
    return {
      ...item,
      isInBasket: userShoppingCartItems?.includes(item.id),
    };
  });

  useEffect(() => {
    if (isInitialMount.current) {
      dispatch(setActiveCategory(targetCategory));
      isInitialMount.current = false;
    } else {
      dispatch(setLoadingStatus(true));
      dispatch(setActiveCategory(targetCategory));
      const timeoutId = setTimeout(() => {
        dispatch(setLoadingStatus(false));
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [targetCategory, dispatch]);

  return {
    isLoading,
    categoryIsNotValid,
    allCategories: categoryItems,
    activeCategory,
    categorySliderItems: formattedTargetSliderItems,
    offerItems: formattedOfferItems,
    collectionItems,
  };
};
