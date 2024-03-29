import React from "react";
import {
  StyledCustomerInfo,
  IconsContainer,
  HoldingContainer,
} from "./CustomerInfo.styled";
import { CustomIcon, Text, Avatar } from "game-guide-ui-kit";
import helpers from "../../../Helpers";
import { type TopBarProps } from "../TopBar";

export type CustomerInfoProps = TopBarProps;

const CustomerInfo: React.FC<CustomerInfoProps> = ({
  profileData,
  numberOfNotifications,
  numberOfShoppingCartItems,
}) => {
  return (
    <StyledCustomerInfo>
      <IconsContainer>
        <button
          aria-label="shopping cart"
          onClick={() => console.log("clicked on shopping-cart")}
        >
          <CustomIcon
            type="shopping-card"
            height="15px"
            heightLaptop="22px"
            heightDesktop="25px"
            counter={numberOfShoppingCartItems}
          />
        </button>

        <button
          aria-label="notifications"
          onClick={() => console.log("clicked on notifications")}
        >
          <CustomIcon
            type="bell"
            height="15px"
            heightLaptop="22px"
            heightDesktop="25px"
            counter={numberOfNotifications}
          />
        </button>
      </IconsContainer>

      <HoldingContainer>
        <div>
          <span>$</span>
        </div>
        <Text isSpan size="sm">
          {helpers.number.formatPrice(profileData?.credit)}
        </Text>
      </HoldingContainer>

      <button onClick={() => console.log("clicked on avatar")}>
        <Avatar
          userType={profileData?.type}
          imageSrc={profileData?.profileImageUrl}
        />
      </button>
    </StyledCustomerInfo>
  );
};

export default CustomerInfo;
