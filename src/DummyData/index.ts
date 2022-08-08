import { categoryItems } from "./Categories.data";
import { categoryTabs } from "./Collections.data";
import { offerItems } from "./Offers.data";
import { slidersData } from "./Slider.data";
import { userProfile } from "./User.data";

export type categoryItemsType = typeof categoryItems;
export type categoryTabsType = typeof categoryTabs;
export type offerItemsType = typeof offerItems;
export type slidersDataType = typeof slidersData;
export type UserInfoType = typeof userProfile;

const dummyData = {
  categoryItems,
  categoryTabs,
  offerItems,
  slidersData,
  userProfile,
};

export default dummyData;
