import React from "react";
import {
  StyledCategoryPage,
  PageContentContainer,
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
} from "../Components";
import { Button, CustomIcon } from "game-guide-ui-kit";

const CategoryPage: React.FC = () => {
  const { categoryItems, codCollection, offerItems, sliderItems, userProfile } =
    dummyData;

  return (
    <StyledCategoryPage>
      <TopBar profileData={userProfile} />

      <CategoriesPanel
        categoriesData={categoryItems}
        onSearch={(searchTerm) => console.log(searchTerm)}
      />

      <PageContentContainer>
        <LeftPanel>
          <ItemSlider sliderItems={sliderItems} />
          <TabsPanel tabsData={codCollection} />
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
    </StyledCategoryPage>
  );
};

export default CategoryPage;
