import React, { useState } from "react";
import { StyledItemSlider } from "./ItemSlider.styled";
import { Slider, SliderControl } from "game-guide-ui-kit";

const dummyDate = [
  {
    id: 1,
    backgroundImageSrc:
      "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt084d55ffe1da593b/5fac3843c1502b76a169ba09/Valorant_Dev_Diary_24_Banner.jpg?auto=webp&disable=upscale&height=500",
    overlayImageSrc:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/79f59cdf-39ad-4360-adf1-5ce480305c1c/ddyto6r-5d4dd684-cf72-428f-abfb-c3e1fddef51d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc5ZjU5Y2RmLTM5YWQtNDM2MC1hZGYxLTVjZTQ4MDMwNWMxY1wvZGR5dG82ci01ZDRkZDY4NC1jZjcyLTQyOGYtYWJmYi1jM2UxZmRkZWY1MWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aGWy2c9moSjhlpjcnz2C4uQuNe1HBV8CuCAPNklN23Q",
    overlayImageHeight: 119,
    overlayPositionFromRight: 5,
    titleImageHeight: 70,
    titleImageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Valorant_logo_-_pink_color_version.svg/1280px-Valorant_logo_-_pink_color_version.svg.png",
    price: 0,
  },
  {
    id: 2,
    backgroundImageSrc:
      "https://cdn.vox-cdn.com/thumbor/-EiajP4lnDPP-2_gZ5vRPGu3lQc=/cdn.vox-cdn.com/uploads/chorus_asset/file/3706148/openworld-places-3.0.jpg",
    overlayImageSrc:
      "https://purepng.com/public/uploads/large/purepng.com-the-witcher-3witcherthe-witcherandrzej-sapkowskiwriterfantasy-serieswitcher-geralt-of-riviawitchersbooksmonster-hunterssupernaturaldeadly-beastsseriesvideo-gamesxbox-17015286611578idtp.png",
    overlayPositionFromRight: 4,
    titleImageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/EN_The-Witcher-3_Logo-Black_RGB.svg/1200px-EN_The-Witcher-3_Logo-Black_RGB.svg.png",
    titleImageHeight: 70,
    title: "Apex Legends",
    price: 1700,
  },
  {
    id: 3,
    backgroundImageSrc: "https://images.alphacoders.com/112/1126565.jpg",
    overlayImageSrc:
      "https://i.pinimg.com/originals/29/66/ee/2966ee9e18daba084c145dd2897d79e0.png",
    overlayPositionFromRight: 5,
    titleImageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Cyberpunk_2077_logo.svg/2560px-Cyberpunk_2077_logo.svg.png",
    titleImageHeight: 50,
    title: "Apex Legends",
    price: 35.64,
  },
  {
    id: 4,
    backgroundImageSrc:
      "https://cdn.akamai.steamstatic.com/steam/apps/760160/ss_5da78e801e86acd19cf44ff775f0e8f2b2ed57b9.1920x1080.jpg?t=1652105897",
    overlayImageSrc:
      "https://image.api.playstation.com/vulcan/ap/rnd/202203/1513/QBf8SHryiV5luLpb19A8BPAj.png",
    overlayImageHeight: 120,
    overlayPositionFromRight: 0,
    titleImageSrc:
      "https://image.api.playstation.com/vulcan/ap/rnd/202203/1513/zpkZqJqSaBSgFFTqXjEwQaMJ.png",
    titleImageHeight: 70,
    title: "Apex Legends",
    price: 35.64,
  },
];

const ItemSlider: React.FC = () => {
  const [activeSlideNumber, setActiveSlideNumber] = useState<number>(1);

  return (
    <StyledItemSlider>
      <Slider sliderItems={dummyDate} activeSlide={activeSlideNumber} />

      <div>
        <SliderControl
          numberOfSlides={dummyDate.length}
          activeSlide={activeSlideNumber}
          handleSlideChange={(index: number) => setActiveSlideNumber(index)}
        />
      </div>
    </StyledItemSlider>
  );
};

export default ItemSlider;
