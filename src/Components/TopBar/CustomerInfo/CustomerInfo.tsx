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
  numberOfShoppingCardItems,
}) => {
  return (
    <StyledCustomerInfo>
      <IconsContainer>
        <button onClick={() => console.log("clicked on shopping-card")}>
          <CustomIcon
            type="shopping-card"
            height="15px"
            heightLaptop="22px"
            heightDesktop="25px"
            counter={numberOfShoppingCardItems}
          />
        </button>

        <button onClick={() => console.log("clicked on notifications")}>
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
          {helpers.formatPrice(profileData?.credit)}
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
