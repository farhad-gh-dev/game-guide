import React from "react";
import {
  StyledOfferCards,
  TitleArea,
  OfferCardContainer,
} from "./OfferCards.styled";
import { Heading, OfferCard, offerItem } from "game-guide-ui-kit";

export type OfferCardsProps = {
  offerItems?: offerItem[];
  shoppingCartItems?: string[];
  onToggleInCart?: (id?: string) => void;
};

const OfferCards: React.FC<OfferCardsProps> = ({
  offerItems = [],
  shoppingCartItems,
  onToggleInCart = () => {},
}) => {
  return (
    <StyledOfferCards>
      <TitleArea>
        <Heading h2>Special Offer</Heading>
      </TitleArea>

      <OfferCardContainer>
        {offerItems.map((item) => {
          return (
            <OfferCard
              key={item.id}
              itemData={item}
              isInBasket={shoppingCartItems?.includes(`${item.id}`)}
              onToggleInCart={(itemData: offerItem) =>
                onToggleInCart(itemData.id)
              }
            />
          );
        })}
      </OfferCardContainer>
    </StyledOfferCards>
  );
};

export default React.memo(OfferCards);
