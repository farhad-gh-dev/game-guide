import styled from "styled-components";
import { styles } from "game-guide-ui-kit";

export const StyledCategoriesPanel = styled.div`
  background-color: ${styles.color.lightest};
  margin-top: 23px;
  padding: 0 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;

  @media (min-width: ${styles.breakpoint.laptopScreen}px) {
    display: flex;
    align-items: stretch;
    margin-top: 9px;
    padding: 0 30px;
    border-radius: 33px;
  }

  @media (min-width: ${styles.breakpoint.largeScreen}px) {
    margin-top: 15px;
    padding: 0 50px;
    border-radius: 50px;
  }
`;

export const SearchBarContainer = styled.div`
  display: none;

  @media (min-width: ${styles.breakpoint.laptopScreen}px) {
    width: 172px;
    display: flex;
    align-items: center;
    margin-right: 30px;
    padding-right: 20px;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }

  @media (min-width: ${styles.breakpoint.largeScreen}px) {
    width: 310px;
    margin-right: 50px;
    padding-right: 30px;
  }
`;

export const ButtonsSlider = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  #left {
    margin-right: 10px;
  }

  #right {
    margin-left: 10px;
  }

  #left,
  #right {
    @media (min-width: ${styles.breakpoint.laptopScreen}px) {
      display: none;
    }
  }
`;

export const ButtonsContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div<{
  show?: boolean;
}>`
  padding: 18px 0;
  text-transform: capitalize;

  @media (min-width: ${styles.breakpoint.laptopScreen}px) {
    padding: 24px 0;
  }

  @media (min-width: ${styles.breakpoint.largeScreen}px) {
    padding: 43px 0;
  }

  ${(props) =>
    !props.show &&
    `
      display: none;
      
      @media (min-width: ${styles.breakpoint.laptopScreen}px) {
          display: unset
      }
  `};
`;
