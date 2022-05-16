import React from "react";
import {
  StyledOfferSidebar,
  TitleArea,
  OfferCardContainer,
} from "./OfferSidebar.styled";
import { Heading, OfferCard, offerItem } from "game-guide-ui-kit";

export type OfferSidebarProps = {
  offerItems?: (offerItem & { id?: string })[];
};

const OfferSidebar: React.FC<OfferSidebarProps> = ({ offerItems = [] }) => {
  return (
    <StyledOfferSidebar>
      <TitleArea>
        <Heading h2>Special Offer</Heading>
      </TitleArea>

      <OfferCardContainer>
        {offerItems.map((item) => {
          return <OfferCard key={item.id} itemData={item} />;
        })}
      </OfferCardContainer>
    </StyledOfferSidebar>
  );
};

export default OfferSidebar;
