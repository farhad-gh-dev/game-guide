import styled from "styled-components";
import { styles } from "game-guide-ui-kit";

export const StyledFooter = styled.footer`
  position: relative;
  padding: 25px;
  background-color: transparent;
  text-align: center;

  @media (min-width: ${styles.breakpoint.laptopScreen}px) {
    display: none;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: 100vw;
    background-color: ${styles.color.darkest};
    z-index: -1;
  }

  div {
    color: ${styles.color.lightest};
  }
  a {
    color: ${styles.color.primary};
    font-weight: bold;
  }
`;
