import { useState, useEffect } from "react";

export const useSlider = (numberOfItems: number, duration: number) => {
  const [activeSlideNumber, setActiveSlideNumber] = useState<number>(1);

  // useEffect(() => {
  //   const sliderTimer = setInterval(() => {
  //     if (activeSlideNumber < numberOfItems) {
  //       setActiveSlideNumber(activeSlideNumber + 1);
  //     } else if (activeSlideNumber === numberOfItems) {
  //       setActiveSlideNumber(1);
  //     }
  //   }, duration * 1000);

  //   return () => clearInterval(sliderTimer);
  // }, [activeSlideNumber, numberOfItems, duration]);

  return {
    activeSlideNumber,
    setActiveSlideNumber,
  };
};
