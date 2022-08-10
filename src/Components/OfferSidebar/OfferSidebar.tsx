import React from "react";
import {
  StyledOfferSidebar,
  TitleArea,
  OfferCardContainer,
} from "./OfferSidebar.styled";
import { Heading, OfferCard, offerItem } from "game-guide-ui-kit";

export type OfferSidebarProps = {
  offerItems?: offerItem[];
  onToggleInCart?: (id?: string) => void;
};

const OfferSidebar: React.FC<OfferSidebarProps> = ({
  offerItems = [],
  onToggleInCart = () => {},
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
              onToggleInCart={(itemData: offerItem) =>
                onToggleInCart(itemData.id)
              }
            />
          );
        })}
      </OfferCardContainer>
    </StyledOfferSidebar>
  );
};

export default OfferSidebar;
