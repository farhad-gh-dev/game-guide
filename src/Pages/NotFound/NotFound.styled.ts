import styled from "styled-components";
import { styles } from "game-guide-ui-kit";

export const StyledNotFoundPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: auto;
  height: 130px;
  margin-left: 30px;

  @media (min-width: ${styles.breakpoint.laptopScreen}px) {
    height: 260px;
    margin-left: 0;
  }

  @media (min-width: ${styles.breakpoint.largeScreen}px) {
    height: 360px;
  }
`;

export const TextWrapper = styled.div`
  color: ${styles.color.darkest};
  font-weight: ${styles.typography.weight.medium};
  margin-left: 22px;

  @media (min-width: ${styles.breakpoint.laptopScreen}px) {
    margin-left: 55px;
  }

  @media (min-width: ${styles.breakpoint.largeScreen}px) {
    margin-left: 80px;
  }
`;

export const ErrorNumber = styled.div`
  font-size: 50px;

  @media (min-width: ${styles.breakpoint.laptopScreen}px) {
    font-size: 100px;
  }

  @media (min-width: ${styles.breakpoint.largeScreen}px) {
    font-size: 138px;
  }

  span {
    font-weight: ${styles.typography.weight.semi_bold};

    &:first-child {
      color: ${styles.color.primary};
    }

    &:last-child {
      color: ${styles.color.primary};
    }
  }
`;

export const ErrorText = styled.span`
  font-size: 36px;

  @media (min-width: ${styles.breakpoint.laptopScreen}px) {
    font-size: 74px;
  }

  @media (min-width: ${styles.breakpoint.largeScreen}px) {
    font-size: 100px;
  }
`;

export const RedirectText = styled.div`
  font-size: 14px;
  font-weight: ${styles.typography.weight.semi_bold};

  @media (min-width: ${styles.breakpoint.laptopScreen}px) {
    font-size: 20px;
  }

  @media (min-width: ${styles.breakpoint.largeScreen}px) {
    font-size: 22px;
  }

  a {
    display: inline-block;
    color: ${styles.color.primary};
  }
`;
