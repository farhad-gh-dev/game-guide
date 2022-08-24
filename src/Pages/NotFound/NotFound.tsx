import React from "react";
import BrandLogo from "../../Assets/logo-512-transparent-bg.png";
import DocumentTitle from "react-document-title";
import {
  StyledNotFoundPage,
  LogoImage,
  TextWrapper,
  ErrorNumber,
  ErrorText,
  RedirectText,
} from "./NotFound.styled";

const NotFoundPage: React.FC = () => {
  const pageTitle = `Game Guide Store | 404 Page - Not Found`;

  return (
    <DocumentTitle title={pageTitle}>
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
            <span>Go back to</span> <a href={"/"}>Homepage</a>
          </RedirectText>
        </TextWrapper>
      </StyledNotFoundPage>
    </DocumentTitle>
  );
};

export default NotFoundPage;
