import React from "react";
import {
  StyledCategoriesPanel,
  SearchBarContainer,
  ButtonsSlider,
  ButtonsContainer,
  ButtonWrapper,
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
              <Button active={i.active} title={i.title}>
                {i.title}
              </Button>
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
