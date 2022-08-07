import React from "react";
import {
  StyledCategoryPage,
  PageContentContainer,
  LoadingContainer,
  LeftPanel,
  RightPanel,
  AllOffersButtonContainer,
} from "./CategoryPage.styled";
import dummyData from "../../DummyData";
import {
  TopBar,
  CategoriesPanel,
  ItemSlider,
  OfferSidebar,
  TabsPanel,
  Footer,
} from "../../Components";
import { Loading, Button, CustomIcon } from "game-guide-ui-kit";
import { useCategory } from "./useCategory";
import { useUserInfo } from "../../Hooks/useUserInfo";

const CategoryPage: React.FC = () => {
  const { categoryItems, codCollection, offerItems, slidersData, userProfile } =
    dummyData;

  const {
    userNotifications,
    userShoppingCardItems,
    handleToggleItemInShoppingCard,
  } = useUserInfo();

  const { isLoading, targetCategory, activeCategory, targetSliderItems } =
    useCategory(slidersData);

  return (
    <StyledCategoryPage>
      <TopBar
        profileData={userProfile}
        numberOfNotifications={userNotifications?.length}
        numberOfShoppingCardItems={userShoppingCardItems?.length}
      />

      <main>
        <CategoriesPanel
          categoriesData={categoryItems.map((i) => {
            return {
              ...i,
              active: i.title === targetCategory,
            };
          })}
          onSearch={(searchTerm) => console.log(searchTerm)}
        />

        <PageContentContainer>
          <LeftPanel>
            {!activeCategory || isLoading ? (
              <LoadingContainer>
                <Loading />
              </LoadingContainer>
            ) : (
              <>
                <ItemSlider sliderItems={targetSliderItems} />
                <TabsPanel tabsData={codCollection} />
              </>
            )}
          </LeftPanel>

          <RightPanel>
            <OfferSidebar
              offerItems={[
                ...offerItems.map((item) => {
                  item.isInBasket = userShoppingCardItems.includes(item.id);
                  return item;
                }),
              ]}
              onAddToCard={(id) => handleToggleItemInShoppingCard(id)}
            />

            <AllOffersButtonContainer>
              <Button active={true}>
                <div className="button-content">
                  See All
                  <CustomIcon
                    className="play-icon"
                    type="play"
                    height="9px"
                    heightLaptop="15px"
                    heightDesktop="18px"
                  />
                </div>
              </Button>
            </AllOffersButtonContainer>
          </RightPanel>
        </PageContentContainer>
      </main>

      <Footer />
    </StyledCategoryPage>
  );
};

export default CategoryPage;
