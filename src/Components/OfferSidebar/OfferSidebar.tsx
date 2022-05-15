import React from "react";
import {
  StyledOfferSidebar,
  StyledTitleArea,
  StyledOfferCardContainer,
} from "./OfferSidebar.styled";
import { Heading, OfferCard, offerItem } from "game-guide-ui-kit";

export type OfferSidebarProps = {
  offerItems?: (offerItem & { id?: string })[];
};

const OfferSidebar: React.FC<OfferSidebarProps> = ({ offerItems = [] }) => {
  return (
    <StyledOfferSidebar>
      <StyledTitleArea>
        <Heading h2>Special Offer</Heading>
      </StyledTitleArea>

      <StyledOfferCardContainer>
        {offerItems.map((item) => {
          return <OfferCard key={item.id} itemData={item} />;
        })}
      </StyledOfferCardContainer>
    </StyledOfferSidebar>
  );
};

export default OfferSidebar;
