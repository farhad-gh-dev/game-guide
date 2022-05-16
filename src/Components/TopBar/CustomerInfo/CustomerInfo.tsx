import React from "react";
import {
  StyledCustomerInfo,
  IconsContainer,
  HoldingContainer,
} from "./CustomerInfo.styled";
import { CustomIcon, Text, Avatar } from "game-guide-ui-kit";
import { formatPrice } from "../../../Helpers/string";
import { type Profile } from "../TopBar";

export type CustomerInfoProps = {
  profileData?: Profile;
};

const CustomerInfo: React.FC<CustomerInfoProps> = ({ profileData }) => {
  return (
    <StyledCustomerInfo>
      <IconsContainer>
        <CustomIcon
          type="shopping-card"
          height="15px"
          heightLaptop="22px"
          heightDesktop="25px"
        />

        <CustomIcon
          type="bell"
          height="15px"
          heightLaptop="22px"
          heightDesktop="25px"
        />
      </IconsContainer>

      <HoldingContainer>
        <div>
          <span>$</span>
        </div>
        <Text isSpan size="sm">
          {formatPrice(profileData?.credit)}
        </Text>
      </HoldingContainer>

      <Avatar
        userType={profileData?.type}
        imageSrc={profileData?.profileImageUrl}
      />
    </StyledCustomerInfo>
  );
};

export default CustomerInfo;
