import React from "react";
import {
  StyledCustomerInfo,
  StyledIconsContainer,
  StyledHoldingContainer,
} from "./CustomerInfo.styled";
import { CustomIcon, Text, Avatar } from "game-guide-ui-kit";
import { formatPrice } from "../../../Helpers/string";

const CustomerInfo: React.FC = () => {
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
          {formatPrice(150000)}
        </Text>
      </StyledHoldingContainer>

      <Avatar userType="Pro" />
    </StyledCustomerInfo>
  );
};

export default CustomerInfo;
