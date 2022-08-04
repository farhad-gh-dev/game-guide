import React, { useEffect } from "react";
import {
  StyledCategoryPage,
  PageContentContainer,
  LoadingContainer,
  LeftPanel,
  RightPanel,
  AllOffersButtonContainer,
} from "../Style/CategoryPage.styled";
import dummyData from "../DummyData";
import {
  TopBar,
  CategoriesPanel,
  ItemSlider,
  OfferSidebar,
  TabsPanel,
  Footer,
} from "../Components";
import { Loading, Button, CustomIcon } from "game-guide-ui-kit";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Hooks/store";
import { setActiveCategory, setLoadingStatus } from "../Store/appSlice";
import { replaceSpaceWithUnderscore } from "../Helpers/string";

const CategoryPage: React.FC = () => {
  const { categoryItems, codCollection, offerItems, slidersData, userProfile } =
    dummyData;

  const dispatch = useAppDispatch();
  const activeCategory = useAppSelector((store) => store.app.activeCategory);
  const isLoading = useAppSelector((store) => store.app.loading);

  const urlParams = useParams();
  const targetCategory = urlParams.category;
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

  return (
    <StyledCategoryPage>
      <TopBar profileData={userProfile} />

      <main>
        <CategoriesPanel
          categoriesData={categoryItems.map((i) => {
            return {
              ...i,
              active: i.title === targetCategory,
            };
          })}
          onSearch={(searchTerm) => console.log(searchTerm)}
        />

        <PageContentContainer>
          <LeftPanel>
            {!activeCategory || isLoading ? (
              <LoadingContainer>
                <Loading />
              </LoadingContainer>
            ) : (
              <>
                <ItemSlider sliderItems={targetSliderItems} />
                <TabsPanel tabsData={codCollection} />
              </>
            )}
          </LeftPanel>

          <RightPanel>
            <OfferSidebar offerItems={offerItems} />

            <AllOffersButtonContainer>
              <Button active={true}>
                <div className="button-content">
                  See All
                  <CustomIcon
                    className="play-icon"
                    type="play"
                    height="9px"
                    heightLaptop="15px"
                    heightDesktop="18px"
                  />
                </div>
              </Button>
            </AllOffersButtonContainer>
          </RightPanel>
        </PageContentContainer>
      </main>

      <Footer />
    </StyledCategoryPage>
  );
};

export default CategoryPage;
