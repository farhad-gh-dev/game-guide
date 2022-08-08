import React from "react";
import {
  StyledTopBar,
  TopBarBackground,
  DesktopContainer,
  MobileNavbarContainer,
} from "./TopBar.styled";
import { BrandLogo, Navbar, NavbarItem, SearchBar } from "game-guide-ui-kit";
import CustomerInfo from "./CustomerInfo/CustomerInfo";

export type Profile = {
  id?: string;
  type?: string;
  credit?: number;
  profileImageUrl?: string;
};

export type TopBarProps = {
  profileData?: Profile;
  numberOfNotifications?: number;
  numberOfShoppingCartItems?: number;
};

const TopBar: React.FC<TopBarProps> = ({
  profileData,
  numberOfNotifications,
  numberOfShoppingCartItems,
}) => {
  return (
    <StyledTopBar>
      <TopBarBackground />
      <DesktopContainer>
        <a href="/">
          <BrandLogo />
        </a>

        <NavbarContent />

        <CustomerInfo
          profileData={profileData}
          numberOfNotifications={numberOfNotifications}
          numberOfShoppingCartItems={numberOfShoppingCartItems}
        />
      </DesktopContainer>

      <MobileNavbarContainer>
        <SearchBar />
        <NavbarContent />
      </MobileNavbarContainer>
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
