import React from "react";
import {
  StyledCategoryPage,
  StyledPageContentContainer,
  StyledRightPanel,
  StyledLeftPanel,
} from "../Style/CategoryPage.styled";
import { TopBar, CategoriesPanel, ItemSlider } from "../Components";

const CategoryPage: React.FC = () => {
  return (
    <StyledCategoryPage>
      <TopBar />

      <CategoriesPanel />

      <StyledPageContentContainer>
        <StyledRightPanel>
          <ItemSlider />
        </StyledRightPanel>

        <StyledLeftPanel>
          <div></div>
        </StyledLeftPanel>
      </StyledPageContentContainer>
    </StyledCategoryPage>
  );
};

export default CategoryPage;
