import React from "react";
import {
  StyledCategoriesPanel,
  StyledSearchBarContainer,
  StyledButtonsSlider,
  StyledButtonsContainer,
  StyledButtonWrapper,
} from "./CategoriesPanel.styled";
import { SearchBar, Button, CustomIcon } from "game-guide-ui-kit";

const buttonsDummyData = [
  {
    id: 0,
    title: "All Games",
    showInSmallScreen: false,
  },
  {
    id: 1,
    title: "Mystery",
    showInSmallScreen: true,
  },
  {
    id: 2,
    title: "Action",
    showInSmallScreen: true,
    active: true,
  },
  {
    id: 3,
    title: "Strategic",
    showInSmallScreen: true,
  },
  {
    id: 3,
    title: "Sports",
    showInSmallScreen: false,
  },
  {
    id: 3,
    title: "Competitive",
    showInSmallScreen: false,
  },
];

const CategoriesPanel: React.FC = () => {
  return (
    <StyledCategoriesPanel>
      <StyledSearchBarContainer>
        <SearchBar onSearch={(term) => console.log(term)} />
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
          {buttonsDummyData.map((i, index) => (
            <StyledButtonWrapper show={i.showInSmallScreen}>
              <Button active={i.active}>{i.title}</Button>
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
