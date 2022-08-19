import React from "react";
import BrandLogo from "../../Assets/logo-512-transparent-bg.png";
import {
  StyledNotFoundPage,
  LogoImage,
  TextWrapper,
  ErrorNumber,
  ErrorText,
  RedirectText,
} from "./NotFound.styled";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <StyledNotFoundPage>
      <LogoImage src={BrandLogo} />
      <TextWrapper>
        <ErrorNumber>
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </ErrorNumber>
        <ErrorText>
          <span>!Found</span>
        </ErrorText>
        <RedirectText>
          <span>Go back to</span> <Link to={"/"}>Homepage</Link>
        </RedirectText>
      </TextWrapper>
    </StyledNotFoundPage>
  );
};

export default NotFoundPage;
