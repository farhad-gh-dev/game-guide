import styled from "styled-components";
import { styles } from "game-guide-ui-kit";

export const StyledItemSlider = styled.div`
  display: flex;
  align-items: stretch;
  margin-top: 40px;
  margin-bottom: 35px;
  z-index: 1;

  @media (min-width: ${styles.breakpoint.laptopScreen}px) {
    margin-top: 60px;
  }

  @media (min-width: ${styles.breakpoint.largeScreen}px) {
    margin-top: 75px;
    margin-bottom: 45px;
  }

  .slider-panels {
    z-index: 0;
  }

  .slider-control-container {
    z-index: 10;
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
`;
