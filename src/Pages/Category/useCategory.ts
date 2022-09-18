import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Hooks/store";
import {
  setActiveCategory,
  setLoadingStatus,
  getAppState,
} from "../../Store/appSlice";
import helpers from "../../Helpers";

export const useCategory = () => {
  const dispatch = useAppDispatch();
  const {
    slidersData,
    activeCategory,
    loading: isLoading,
    categoryItems,
    offerItems,
    collectionItems,
  } = useAppSelector(getAppState);
  const isInitialMount = useRef(true);

  const urlParams = useParams();
  const targetCategory = urlParams.category?.toLowerCase();
  const categoryIsNotValid = !Object.keys(slidersData).includes(
    helpers.string.replaceSpaceWithUnderscore(targetCategory)
  );

  const targetSliderItems =
    slidersData[helpers.string.replaceSpaceWithUnderscore(activeCategory)];

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
    targetCategory,
    activeCategory,
    categorySliderItems: targetSliderItems,
    offerItems,
    collectionItems,
  };
};
