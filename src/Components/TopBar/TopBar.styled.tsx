import styled from "styled-components";
import { styles } from "game-guide-ui-kit";

export const StyledTopBar = styled.div`
  position: relative;
  color: ${styles.color.lightest};
  padding-top: 25px;

  @media (min-width: ${styles.breakpoint.laptopScreen}px) {
    padding-top: 0;
  }
`;

export const StyledTopBarBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${styles.color.darkest};
  width: 100%;
  height: 180px;
  z-index: -1;

  @media (min-width: ${styles.breakpoint.largeScreen}px) {
    height: 250px;
  }
`;

export const StyledDesktopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: none;

    @media (min-width: ${styles.breakpoint.laptopScreen}px) {
      display: flex;
    }
  }

  ul > li {
    padding-top: 50px;
    padding-bottom: 50px;

    @media (min-width: ${styles.breakpoint.largeScreen}px) {
      padding-top: 70px;
      padding-bottom: 70px;
    }
  }
`;

export const StyledMobileNavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  padding-right: 5px;

  @media (min-width: ${styles.breakpoint.laptopScreen}px) {
    display: none;
  }
`;
