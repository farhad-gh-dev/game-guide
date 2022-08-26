import React from "react";
import {
  StyledCategoriesPanel,
  SearchBarContainer,
  ButtonsSlider,
  ButtonsContainer,
  ButtonWrapper,
} from "./CategoriesPanel.styled";
import { SearchBar, Button, CustomIcon } from "game-guide-ui-kit";
import { Link } from "react-router-dom";

export type CategoryItem = {
  id?: string;
  title?: string;
  showInSmallScreen?: boolean;
};

export type CategoriesPanelProps = {
  categoriesData?: CategoryItem[];
  activeCategoryTitle?: string;
  onSearch?: (searchTerm: string) => void;
};

const CategoriesPanel: React.FC<CategoriesPanelProps> = ({
  categoriesData,
  activeCategoryTitle,
  onSearch = (searchTerm) => console.log(searchTerm),
}) => {
  return (
    <StyledCategoriesPanel>
      <SearchBarContainer>
        <SearchBar onSearch={onSearch} />
      </SearchBarContainer>

      <ButtonsSlider>
        <div id="left">
          <CustomIcon
            type="arrow-to-left"
            height="10px"
            strokeColor="rgba(0, 0, 0, 0.3)"
          />
        </div>

        <ButtonsContainer>
          {categoriesData?.map((i) => (
            <ButtonWrapper key={i.id} show={i.showInSmallScreen}>
              <Link to={`/categories/${i.title}`}>
                <Button
                  variant={
                    activeCategoryTitle === i.title ? "primary" : "default"
                  }
                >
                  {i.title}
                </Button>
              </Link>
            </ButtonWrapper>
          ))}
        </ButtonsContainer>

        <div id="right">
          <CustomIcon type="arrow-to-right" height="10px" />
        </div>
      </ButtonsSlider>
    </StyledCategoriesPanel>
  );
};

export default CategoriesPanel;
