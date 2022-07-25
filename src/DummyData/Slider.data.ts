import ValorantBackgroundImage from "../Assets/Images/valorant_background.jpg";
import ValorantOverlayImage from "../Assets/Images/valorant_overlay.png";
import ValorantTitleImage from "../Assets/Images/valorant_title.png";

import WitcherBackgroundImage from "../Assets/Images/witcher3_background.jpg";
import WitcherOverlayImage from "../Assets/Images/witcher3_overlay.png";
import WitcherTitleImage from "../Assets/Images/witcher3_title.png";

import CyberpunkBackgroundImage from "../Assets/Images/cyberpunk_background.jpg";
import CyberpunkOverlayImage from "../Assets/Images/cyberpunk_overlay.png";
import CyberpunkTitleImage from "../Assets/Images/cyberpunk_title.png";

import BloodHuntBackgroundImage from "../Assets/Images/bloodhunt_background.jpg";
import BloodHuntOverlayImage from "../Assets/Images/bloodhunt_overlay.png";
import BloodHuntTitleImage from "../Assets/Images/bloodhunt_title.png";

import CrusaderKingsIIIBackgroundImage from "../Assets/Images/crusader_kings_III_background.jpg";
import CrusaderKingsIIIOverlayImage from "../Assets/Images/crusader_kings_III_overlay.png";
import CrusaderKingsIIITitleImage from "../Assets/Images/crusader_kings_III_title.png";

import CivilizationVIBackgroundImage from "../Assets/Images/civilization_vi_background.jpg";
import CivilizationVIOverlayImage from "../Assets/Images/civilization_vi_overlay.png";
import CivilizationVITitleImage from "../Assets/Images/civilization_vi_title.png";

import XCOM2BackgroundImage from "../Assets/Images/XCOM_2_background.jpg";
import XCOM2OverlayImage from "../Assets/Images/XCOM_2_overlay.png";
import XCOM2TitleImage from "../Assets/Images/XCOM_2_title.png";

import StarCraftIIBackgroundImage from "../Assets/Images/starcraft_II_background.jpg";
import StarCraftIIOverlayImage from "../Assets/Images/starcraft_II_overlay.png";
import StarCraftIITitleImage from "../Assets/Images/starcraft_II_title.png";

export const sliderItems = {
  action: [
    {
      id: 1,
      backgroundImageSrc: CyberpunkBackgroundImage,
      overlayImageSrc: CyberpunkOverlayImage,
      titleImageSrc: CyberpunkTitleImage,
      overlayPositionFromRight: 5,
      titleImageHeight: 50,
      price: 35.64,
    },
    {
      id: 2,
      backgroundImageSrc: WitcherBackgroundImage,
      overlayImageSrc: WitcherOverlayImage,
      titleImageSrc: WitcherTitleImage,
      overlayImageHeight: 120,
      overlayPositionFromRight: 6,
      titleImageHeight: 70,
      price: 49.99,
    },
    {
      id: 3,
      backgroundImageSrc: ValorantBackgroundImage,
      overlayImageSrc: ValorantOverlayImage,
      titleImageSrc: ValorantTitleImage,
      overlayImageHeight: 118,
      overlayPositionFromRight: 4,
      titleImageHeight: 55,
      price: 0,
    },
    {
      id: 4,
      backgroundImageSrc: BloodHuntBackgroundImage,
      overlayImageSrc: BloodHuntOverlayImage,
      titleImageSrc: BloodHuntTitleImage,
      overlayImageHeight: 115,
      overlayPositionFromRight: 0,
      titleImageHeight: 70,
      price: 0,
    },
  ],
  strategic: [
    {
      id: 1,
      backgroundImageSrc: CrusaderKingsIIIBackgroundImage,
      overlayImageSrc: CrusaderKingsIIIOverlayImage,
      titleImageSrc: CrusaderKingsIIITitleImage,
      overlayImageHeight: 115,
      overlayPositionFromRight: -1,
      titleImageHeight: 75,
      price: 35.64,
    },
    {
      id: 2,
      backgroundImageSrc: CivilizationVIBackgroundImage,
      overlayImageSrc: CivilizationVIOverlayImage,
      titleImageSrc: CivilizationVITitleImage,
      overlayImageHeight: 120,
      overlayPositionFromRight: 7,
      titleImageHeight: 63,
      price: 35.64,
    },
    {
      id: 3,
      backgroundImageSrc: StarCraftIIBackgroundImage,
      overlayImageSrc: StarCraftIIOverlayImage,
      titleImageSrc: StarCraftIITitleImage,
      overlayImageHeight: 120,
      overlayPositionFromRight: 7,
      titleImageHeight: 90,
      price: 35.64,
    },
    {
      id: 4,
      backgroundImageSrc: XCOM2BackgroundImage,
      overlayImageSrc: XCOM2OverlayImage,
      titleImageSrc: XCOM2TitleImage,
      overlayImageHeight: 120,
      overlayPositionFromRight: 9,
      titleImageHeight: 70,
      price: 35.64,
    },
  ],
};
