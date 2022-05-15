import React from "react";
import {
  StyledCategoriesPanel,
  StyledSearchBarContainer,
  StyledButtonsSlider,
  StyledButtonsContainer,
  StyledButtonWrapper,
} from "./CategoriesPanel.styled";
import { SearchBar, Button, CustomIcon } from "game-guide-ui-kit";

export type CategoryItem = {
  id?: number;
  title?: string;
  showInSmallScreen?: boolean;
  active?: boolean;
};

export type CategoriesPanelProps = {
  categoriesData?: CategoryItem[];
  onSearch?: (searchTerm: string) => void;
};

const CategoriesPanel: React.FC<CategoriesPanelProps> = ({
  categoriesData,
  onSearch = (searchTerm) => console.log(searchTerm),
}) => {
  return (
    <StyledCategoriesPanel>
      <StyledSearchBarContainer>
        <SearchBar onSearch={onSearch} />
      </StyledSearchBarContainer>

      <StyledButtonsSlider>
        <div id="left">
          <CustomIcon
            type="arrow-to-left"
            height="10px"
            strokeColor="rgba(0, 0, 0, 0.3)"
          />
        </div>

        <StyledButtonsContainer>
          {categoriesData?.map((i) => (
            <StyledButtonWrapper key={i.id} show={i.showInSmallScreen}>
              <Button active={i.active} title={i.title}>
                {i.title}
              </Button>
            </StyledButtonWrapper>
          ))}
        </StyledButtonsContainer>

        <div id="right">
          <CustomIcon type="arrow-to-right" height="10px" />
        </div>
      </StyledButtonsSlider>
    </StyledCategoriesPanel>
  );
};

export default CategoriesPanel;
