import styled from "styled-components";
import { styles } from "game-guide-ui-kit";

export const StyledFooter = styled.footer`
  padding: 25px;
  background-color: ${styles.color.darkest};
  text-align: center;

  @media (min-width: ${styles.breakpoint.laptopScreen}px) {
    display: none;
  }

  div {
    color: ${styles.color.lightest};
  }
  a {
    color: ${styles.color.primary};
    font-weight: bold;
  }
`;
