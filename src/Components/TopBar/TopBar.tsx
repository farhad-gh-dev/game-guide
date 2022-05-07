import React from "react";
import {
  StyledTopBar,
  StyledTopBarBackground,
  StyledDesktopContainer,
  StyledMobileNavbarContainer,
} from "./TopBar.styled";
import { BrandLogo, Navbar, NavbarItem, SearchBar } from "game-guide-ui-kit";
import CustomerInfo from "./CustomerInfo/CustomerInfo";

const TopBar: React.FC = () => {
  return (
    <StyledTopBar>
      <StyledTopBarBackground />
      <StyledDesktopContainer>
        <BrandLogo />

        <NavbarContent />

        <CustomerInfo />
      </StyledDesktopContainer>

      <StyledMobileNavbarContainer>
        <SearchBar />
        <NavbarContent />
      </StyledMobileNavbarContainer>
    </StyledTopBar>
  );
};

const NavbarContent = () => {
  return (
    <Navbar>
      <NavbarItem active={false}>
        <a href="/">Home</a>
      </NavbarItem>
      <NavbarItem active={true}>
        <a href="/">Store</a>
      </NavbarItem>
      <NavbarItem active={false}>
        <a href="/">Blog</a>
      </NavbarItem>
      <NavbarItem active={false}>
        <a href="/">Support</a>
      </NavbarItem>
    </Navbar>
  );
};

export default TopBar;
