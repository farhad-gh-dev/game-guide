import { useState, useEffect } from "react";
import { styles } from "game-guide-ui-kit";

export const useSlider = (numberOfItems: number, duration: number) => {
  const [activeSlideNumber, setActiveSlideNumber] = useState<number>(1);
  const [overlayImage3DOffsets, setOverlayImage3DOffset] = useState<number[]>([
    0, 0,
  ]);

  const handleOverlayImage3DEffect = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const friction =
      window.innerWidth >= styles.breakpoint.largeScreen
        ? 1 / 72
        : window.innerWidth >= styles.breakpoint.laptopScreen
        ? 1 / 60
        : 1 / 26;

    let followX = window.innerWidth / 2 - e.clientX;
    let followY = window.innerHeight / 2 - e.clientY;

    let x = 0,
      y = 0;
    x += (-followX - x) * friction;
    y += (followY - y) * friction;

    setOverlayImage3DOffset([x, y / 2]);
  };

  useEffect(() => {
    const sliderTimer = setTimeout(() => {
      if (activeSlideNumber < numberOfItems) {
        setActiveSlideNumber((prevState) => prevState + 1);
      } else if (activeSlideNumber === numberOfItems) {
        setActiveSlideNumber(1);
      }
    }, duration * 1000);

    return () => clearTimeout(sliderTimer);
  }, [activeSlideNumber, numberOfItems, duration]);

  return {
    activeSlideNumber,
    overlayImage3DOffsets,
    setActiveSlideNumber,
    handleOverlayImage3DEffect,
  };
};
