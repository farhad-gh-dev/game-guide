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

export const sliderItems = [
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
    titleImageHeight: 75,
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
];
