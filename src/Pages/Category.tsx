import React from "react";
import {
  StyledCategoryPage,
  StyledPageContentContainer,
  StyledRightPanel,
  StyledLeftPanel,
} from "../Style/CategoryPage.styled";
import dummyData from "../DummyData";
import { TopBar, CategoriesPanel, ItemSlider } from "../Components";

const CategoryPage: React.FC = () => {
  const { sliderItems } = dummyData;

  return (
    <StyledCategoryPage>
      <TopBar />

      <CategoriesPanel />

      <StyledPageContentContainer>
        <StyledRightPanel>
          <ItemSlider sliderItems={sliderItems} />
        </StyledRightPanel>

        <StyledLeftPanel>
          <div></div>
        </StyledLeftPanel>
      </StyledPageContentContainer>
    </StyledCategoryPage>
  );
};

export default CategoryPage;
