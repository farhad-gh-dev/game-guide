import React, { useEffect } from "react";
import { StyledItemSlider } from "./ItemSlider.styled";
import { Slider, type SliderItem, SliderControl } from "game-guide-ui-kit";
import { useSlider } from "./useSlider";

export type ItemSliderProps = {
  sliderItems: SliderItem[];
  onToggleInCart?: (id?: string) => void;
};

const ItemSlider: React.FC<ItemSliderProps> = ({
  sliderItems,
  onToggleInCart = () => {},
}) => {
  const { activeSlideNumber, setActiveSlideNumber } = useSlider(
    sliderItems.length,
    3.5
  );

  useEffect(() => {
    setActiveSlideNumber(1);
  }, [sliderItems, setActiveSlideNumber]);

  return (
    <StyledItemSlider>
      <Slider
        className="slider-panels"
        sliderItems={sliderItems}
        activeSlide={activeSlideNumber}
        onBuyHandler={(id) => onToggleInCart(id)}
      />

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
