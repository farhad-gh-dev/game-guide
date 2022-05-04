import styled from "styled-components";
import { styles } from "game-guide-ui-kit";

export const StyledCustomerInfo = styled.div`
  display: flex;
  align-items: center;

  span {
    color: ${styles.color.lightest};
  }
`;

export const StyledIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    margin-right: 12px;

    @media (min-width: ${styles.breakpoint.laptopScreen}px) {
      margin-right: 22px;
    }

    @media (min-width: ${styles.breakpoint.largeScreen}px) {
      margin-right: 30px;
    }
  }
`;

export const StyledHoldingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;

  @media (min-width: ${styles.breakpoint.laptopScreen}px) {
    margin-right: 25px;
  }

  @media (min-width: ${styles.breakpoint.largeScreen}px) {
    margin-right: 40px;
  }

  div {
    position: relative;
    width: 14px;
    height: 14px;
    border-radius: 100%;
    background-color: ${styles.color.green};
    margin-right: 7px;

    @media (min-width: ${styles.breakpoint.laptopScreen}px) {
      width: 17px;
      height: 17px;
      margin-right: 8px;
    }

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${styles.color.darkest};
      font-weight: 900;
      font-size: ${styles.typography.size.text_10};

      @media (min-width: ${styles.breakpoint.laptopScreen}px) {
        font-size: 14px;
      }
    }
  }
`;
