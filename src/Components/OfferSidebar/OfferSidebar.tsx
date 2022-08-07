import React from "react";
import {
  StyledOfferSidebar,
  TitleArea,
  OfferCardContainer,
} from "./OfferSidebar.styled";
import { Heading, OfferCard, offerItem } from "game-guide-ui-kit";

export type OfferSidebarProps = {
  offerItems?: (offerItem & { id?: string })[];
  onAddToCard?: (id?: string) => void;
};

const OfferSidebar: React.FC<OfferSidebarProps> = ({
  offerItems = [],
  onAddToCard = () => {},
}) => {
  return (
    <StyledOfferSidebar>
      <TitleArea>
        <Heading h2>Special Offer</Heading>
      </TitleArea>

      <OfferCardContainer>
        {offerItems.map((item) => {
          return (
            <OfferCard
              key={item.id}
              itemData={item}
              onAddToCard={(itemData: offerItem) => onAddToCard(itemData.id)}
            />
          );
        })}
      </OfferCardContainer>
    </StyledOfferSidebar>
  );
};

export default OfferSidebar;
