import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Hooks/store";
import { setActiveCategory, setLoadingStatus } from "../../Store/appSlice";
import { replaceSpaceWithUnderscore } from "../../Helpers/string";

export const useCategory = (slidersData: any) => {
  const dispatch = useAppDispatch();
  const activeCategory = useAppSelector((store) => store.app.activeCategory);
  const isLoading = useAppSelector((store) => store.app.loading);

  const urlParams = useParams();
  const targetCategory = urlParams.category?.toLowerCase();
  const targetSliderItems = activeCategory
    ? slidersData[replaceSpaceWithUnderscore(activeCategory)]
    : [];

  useEffect(() => {
    dispatch(setLoadingStatus(true));
    dispatch(setActiveCategory(targetCategory));
    setTimeout(() => {
      dispatch(setLoadingStatus(false));
    }, 1000);
  }, [targetCategory, dispatch]);

  return {
    isLoading,
    targetCategory,
    activeCategory,
    targetSliderItems,
  };
};
