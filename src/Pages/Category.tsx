import React from "react";
import styled from "styled-components";
import TopBar from "../Components/TopBar/TopBar";
import { styles } from "game-guide-ui-kit";

const StyledCategoryPage = styled.div`
  margin: 0 auto;
  padding: 0 25px;

  @media (min-width: ${styles.breakpoint.laptopScreen}px) {
    max-width: 1180px;
    padding: 0;
  }

  @media (min-width: ${styles.breakpoint.largeScreen}px) {
    max-width: 1680px;
  }
`;

const CategoryPage: React.FC = () => {
  return (
    <StyledCategoryPage>
      <TopBar />
    </StyledCategoryPage>
  );
};

export default CategoryPage;
