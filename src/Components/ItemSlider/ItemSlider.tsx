import React, { useEffect } from "react";
import { StyledItemSlider, SliderContainer } from "./ItemSlider.styled";
import { Slider, type SliderItemType, SliderControl } from "game-guide-ui-kit";
import { useSlider } from "./useSlider";

export type ItemSliderProps = {
  sliderItems: SliderItemType[];
  shoppingCartItems?: string[];
  activeCategory?: string;
  onToggleInCart?: (id?: string) => void;
};

const ItemSlider: React.FC<ItemSliderProps> = ({
  sliderItems,
  shoppingCartItems,
  activeCategory,
  onToggleInCart = () => {},
}) => {
  const {
    sliderItemsWithRNG,
    activeSlideNumber,
    overlayImage3DOffsets,
    setActiveSlideNumber,
    handleOverlayImage3DEffect,
  } = useSlider(sliderItems, 3.5);

  useEffect(() => {
    setActiveSlideNumber(1);
  }, [activeCategory, setActiveSlideNumber]);

  return (
    <StyledItemSlider>
      <SliderContainer onMouseMove={(e) => handleOverlayImage3DEffect(e)}>
        <Slider
          className="slider-panels"
          sliderItems={sliderItemsWithRNG}
          basketItems={shoppingCartItems}
          activeSlide={activeSlideNumber}
          overlayImage3DOffsets={[
            overlayImage3DOffsets[0],
            overlayImage3DOffsets[1],
          ]}
          onToggleInCart={(id) => onToggleInCart(id)}
        />
      </SliderContainer>

      <div className="slider-control-container">
        <SliderControl
          numberOfSlides={sliderItemsWithRNG.length}
          activeSlide={activeSlideNumber}
          handleSlideChange={(index: number) => setActiveSlideNumber(index)}
        />
      </div>
    </StyledItemSlider>
  );
};

export default React.memo(ItemSlider);
