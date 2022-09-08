import React from "react";
import {
  Heading,
  OfferCard,
  Button,
  CustomIcon,
  type offerItem,
} from "game-guide-ui-kit";
import {
  Sidebar,
  OfferCardsContainer,
  TitleArea,
  OfferCardWrapper,
  AllOffersButtonContainer,
} from "./OfferSidebar.styled";

type Props = {
  offerItems?: offerItem[];
  shoppingCartItems?: string[];
  onToggleItemInCart?: (id?: string) => void;
};

const OfferSidebar: React.FC<Props> = ({
  offerItems = [],
  shoppingCartItems,
  onToggleItemInCart = () => {},
}) => {
  return (
    <Sidebar>
      <OfferCardsContainer>
        <TitleArea>
          <Heading h2>Special Offer</Heading>
        </TitleArea>

        <OfferCardWrapper>
          {offerItems.map((item) => {
            return (
              <OfferCard
                key={item.id}
                itemData={item}
                isInBasket={shoppingCartItems?.includes(`${item.id}`)}
                onToggleInCart={(itemData: offerItem) =>
                  onToggleItemInCart(itemData.id)
                }
              />
            );
          })}
        </OfferCardWrapper>
      </OfferCardsContainer>

      <AllOffersButtonContainer>
        <Button variant="primary">
          <div className="button-content">
            See All
            <CustomIcon
              className="play-icon"
              type="play"
              height="9px"
              heightLaptop="15px"
              heightDesktop="18px"
            />
          </div>
        </Button>
      </AllOffersButtonContainer>
    </Sidebar>
  );
};

export default React.memo(OfferSidebar);
