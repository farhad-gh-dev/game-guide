import styled from "styled-components";
import { styles } from "game-guide-ui-kit";

export const StyledOfferCards = styled.div`
  margin-bottom: 40px;

  @media (min-width: ${styles.breakpoint.largeScreen}px) {
    margin-bottom: 50px;
  }
`;

export const TitleArea = styled.div`
  margin-bottom: 35px;

  @media (min-width: ${styles.breakpoint.laptopScreen}px) {
    margin-top: 25px;
  }

  @media (min-width: ${styles.breakpoint.largeScreen}px) {
    margin-top: 35px;
    margin-bottom: 50px;
  }

  h2 {
    letter-spacing: 0.03em;
  }
`;

export const OfferCardContainer = styled.div`
  @media (min-width: ${styles.breakpoint.laptopScreen}px) {
    padding-left: 8px;
  }

  @media (min-width: ${styles.breakpoint.largeScreen}px) {
    padding-left: 20px;
  }
`;
