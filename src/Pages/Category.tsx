import React from "react";
import {
  StyledCategoryPage,
  StyledPageContentContainer,
  StyledLeftPanel,
  StyledRightPanel,
  StyledAllOffersButtonContainer,
} from "../Style/CategoryPage.styled";
import dummyData from "../DummyData";
import {
  TopBar,
  CategoriesPanel,
  ItemSlider,
  OfferSidebar,
} from "../Components";
import { Button, CustomIcon } from "game-guide-ui-kit";

const CategoryPage: React.FC = () => {
  const { categoryItems, offerItems, sliderItems, userProfile } = dummyData;

  return (
    <StyledCategoryPage>
      <TopBar profileData={userProfile} />

      <CategoriesPanel
        categoriesData={categoryItems}
        onSearch={(searchTerm) => console.log(searchTerm)}
      />

      <StyledPageContentContainer>
        <StyledLeftPanel>
          <ItemSlider sliderItems={sliderItems} />
        </StyledLeftPanel>

        <StyledRightPanel>
          <OfferSidebar offerItems={offerItems} />
          <StyledAllOffersButtonContainer>
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
          </StyledAllOffersButtonContainer>
        </StyledRightPanel>
      </StyledPageContentContainer>
    </StyledCategoryPage>
  );
};

export default CategoryPage;
