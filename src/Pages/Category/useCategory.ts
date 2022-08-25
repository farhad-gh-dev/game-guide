import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Hooks/store";
import { setActiveCategory, setLoadingStatus } from "../../Store/appSlice";
import helpers from "../../Helpers";

export const useCategory = (userShoppingCartItems?: string[]) => {
  const dispatch = useAppDispatch();
  const slidersData = useAppSelector((store) => store.app.slidersData);
  const activeCategory = useAppSelector((store) => store.app.activeCategory);
  const isLoading = useAppSelector((store) => store.app.loading);
  const categoryItems = useAppSelector((store) => store.app.categoryItems);
  const offerItems = useAppSelector((store) => store.app.offerItems);
  const collectionItems = useAppSelector((store) => store.app.collectionItems);

  const navigate = useNavigate();
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
    dispatch(setLoadingStatus(true));
    dispatch(setActiveCategory(targetCategory));
    setTimeout(() => {
      dispatch(setLoadingStatus(false));
    }, 1000);
  }, [slidersData, targetCategory, navigate, dispatch]);

  return {
    isLoading,
    categoryItems,
    targetCategory,
    categoryIsNotValid,
    activeCategory,
    targetSliderItems: formattedTargetSliderItems,
    offerItems: formattedOfferItems,
    collectionItems,
  };
};
