import styled from "styled-components";
import { styles } from "game-guide-ui-kit";

export const StyledCategoryPage = styled.div`
  margin: 0 auto;
  padding: 0 25px;
  max-width: 375px;

  @media (min-width: ${styles.breakpoint.laptopScreen}px) {
    max-width: 1180px;
    padding: 0;
  }

  @media (min-width: ${styles.breakpoint.largeScreen}px) {
    max-width: 1680px;
  }
`;

export const PageContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${styles.breakpoint.laptopScreen}px) {
    flex-direction: row;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 170px;

  @media (min-width: ${styles.breakpoint.laptopScreen}px) {
    height: 360px;
  }

  @media (min-width: ${styles.breakpoint.largeScreen}px) {
    height: 515px;
  }
`;

export const MainContent = styled.main`
  width: 100%;

  @media (min-width: ${styles.breakpoint.laptopScreen}px) {
    width: 70%;
    padding-right: 20px;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }

  @media (min-width: ${styles.breakpoint.largeScreen}px) {
    padding-right: 50px;
  }
`;
