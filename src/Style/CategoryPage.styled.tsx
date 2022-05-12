import styled from "styled-components";
import { styles } from "game-guide-ui-kit";

export const StyledCategoryPage = styled.div`
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

export const StyledPageContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${styles.breakpoint.laptopScreen}px) {
    flex-direction: row;
  }
`;

export const StyledRightPanel = styled.div`
  width: 100%;
  /* background-color: rgba(255, 0, 0, 0.2); */

  @media (min-width: ${styles.breakpoint.laptopScreen}px) {
    width: 70%;
    padding-right: 20px;
    border-right: 1px solid rgba(0, 0, 0, 0.3);
  }

  @media (min-width: ${styles.breakpoint.largeScreen}px) {
    padding-right: 50px;
  }
`;

export const StyledLeftPanel = styled.div`
  height: 500px;
  background-color: rgba(43, 0, 255, 0.2);
  width: 100%;

  @media (min-width: ${styles.breakpoint.laptopScreen}px) {
    width: 30%;
  }
`;
