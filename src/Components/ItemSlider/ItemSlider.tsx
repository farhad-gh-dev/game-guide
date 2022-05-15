import React, { useState } from "react";
import { StyledItemSlider } from "./ItemSlider.styled";
import { Slider, type SliderItem, SliderControl } from "game-guide-ui-kit";

export type ItemSliderProps = {
  sliderItems: SliderItem[];
};

const ItemSlider: React.FC<ItemSliderProps> = ({ sliderItems }) => {
  const [activeSlideNumber, setActiveSlideNumber] = useState<number>(1);
  return (
    <StyledItemSlider>
      <Slider sliderItems={sliderItems} activeSlide={activeSlideNumber} />

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
