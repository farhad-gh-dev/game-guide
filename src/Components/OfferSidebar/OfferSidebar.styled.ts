import styled from "styled-components";
import { styles } from "game-guide-ui-kit";

export const Sidebar = styled.aside`
  width: 100%;
  margin-bottom: 45px;
  height: 100%;

  @media (min-width: ${styles.breakpoint.laptopScreen}px) {
    width: 30%;
    padding-left: 20px;
    margin-bottom: 50px;

    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }

  @media (min-width: ${styles.breakpoint.largeScreen}px) {
    padding-left: 50px;
    margin-bottom: 60px;
  }
`;

export const OfferCardsContainer = styled.div`
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

export const OfferCardWrapper = styled.div`
  @media (min-width: ${styles.breakpoint.laptopScreen}px) {
    padding-left: 8px;
  }

  @media (min-width: ${styles.breakpoint.largeScreen}px) {
    padding-left: 20px;
  }
`;

export const AllOffersButtonContainer = styled.div`
  text-align: center;

  .button-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .play-icon {
    margin-left: 5px;

    @media (min-width: ${styles.breakpoint.laptopScreen}px) {
      margin-left: 7px;
    }

    @media (min-width: ${styles.breakpoint.largeScreen}px) {
      margin-left: 10px;
    }
  }
`;
