import React from "react";
import {
  StyledCustomerInfo,
  StyledIconsContainer,
  StyledHoldingContainer,
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
      <StyledIconsContainer>
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
      </StyledIconsContainer>

      <StyledHoldingContainer>
        <div>
          <span>$</span>
        </div>
        <Text isSpan size="sm">
          {formatPrice(profileData?.credit)}
        </Text>
      </StyledHoldingContainer>

      <Avatar
        userType={profileData?.type}
        imageSrc={profileData?.profileImageUrl}
      />
    </StyledCustomerInfo>
  );
};

export default CustomerInfo;
