import EldenRingImage from "../Assets/Images/elden_ring_offer.jpg";
import ResidentEvil8Image from "../Assets/Images/resident_evil_8_offer.jpg";

export const offerItems = [
  {
    id: "0",
    title: "Elden Ring",
    imageSrc: EldenRingImage,
    url: "/",
    price: 34.9,
    rating: 9.8,
    dropdownItems: [
      { text: "Collection", url: "/" },
      { text: "Blog Posts", url: "/" },
    ],
  },
  {
    id: "1",
    title: "Resident Evil 8",
    imageSrc: ResidentEvil8Image,
    url: "/",
    price: 59.99,
    rating: 8.5,
    isInBasket: false,
    dropdownItems: [
      { text: "Collection", url: "/" },
      { text: "Blog Posts", url: "/" },
    ],
  },
];
