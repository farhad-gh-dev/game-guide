import React from "react";
import { StyledItemSlider } from "./ItemSlider.styled";
import { Slider, type SliderItem, SliderControl } from "game-guide-ui-kit";
import { useSlider } from "./useSlider";

export type ItemSliderProps = {
  sliderItems: SliderItem[];
};

const ItemSlider: React.FC<ItemSliderProps> = ({ sliderItems }) => {
  const { activeSlideNumber, setActiveSlideNumber } = useSlider(
    sliderItems.length,
    3.5
  );

  return (
    <StyledItemSlider>
      <Slider
        sliderItems={sliderItems}
        activeSlide={activeSlideNumber}
        onBuyHandler={(i) => console.log(i)}
      />

      <div>
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
