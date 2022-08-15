import React, { useEffect } from "react";
import { StyledItemSlider, SliderContainer } from "./ItemSlider.styled";
import { Slider, type SliderItem, SliderControl } from "game-guide-ui-kit";
import { useSlider } from "./useSlider";

export type ItemSliderProps = {
  sliderItems: SliderItem[];
  activeCategory?: string;
  onToggleInCart?: (id?: string) => void;
};

const ItemSlider: React.FC<ItemSliderProps> = ({
  sliderItems,
  activeCategory,
  onToggleInCart = () => {},
}) => {
  const {
    activeSlideNumber,
    overlayImage3DOffsets,
    setActiveSlideNumber,
    handleOverlayImage3DEffect,
  } = useSlider(sliderItems.length, 3.5);

  useEffect(() => {
    setActiveSlideNumber(1);
  }, [activeCategory, setActiveSlideNumber]);

  return (
    <StyledItemSlider>
      <SliderContainer onMouseMove={(e) => handleOverlayImage3DEffect(e)}>
        <Slider
          className="slider-panels"
          sliderItems={sliderItems}
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
          numberOfSlides={sliderItems.length}
          activeSlide={activeSlideNumber}
          handleSlideChange={(index: number) => setActiveSlideNumber(index)}
        />
      </div>
    </StyledItemSlider>
  );
};

export default ItemSlider;
