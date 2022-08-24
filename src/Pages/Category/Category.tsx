import React from "react";
import { useCategory } from "./useCategory";
import { useUserInfo } from "../../Hooks/useUserInfo";
import DocumentTitle from "react-document-title";
import helpers from "../../Helpers";
import {
  StyledCategoryPage,
  PageContentContainer,
  LoadingContainer,
  LeftPanel,
  RightPanel,
  AllOffersButtonContainer,
} from "./CategoryPage.styled";
import {
  TopBar,
  CategoriesPanel,
  ItemSlider,
  OfferSidebar,
  TabsPanel,
  Footer,
} from "../../Components";
import { Loading, Button, CustomIcon } from "game-guide-ui-kit";

const CategoryPage: React.FC = () => {
  const {
    userProfileInfo,
    userNotifications,
    userShoppingCartItems,
    handleToggleItemInShoppingCart,
  } = useUserInfo();

  const {
    isLoading,
    categoryItems,
    targetCategory,
    activeCategory,
    targetSliderItems,
    offerItems,
    collectionItems,
  } = useCategory(userShoppingCartItems);

  const pageTitle = `Game Guide Store | ${helpers.string.capitalize(
    targetCategory
  )} Category`;

  return (
    <DocumentTitle title={pageTitle}>
      <StyledCategoryPage>
        <TopBar
          profileData={userProfileInfo}
          numberOfNotifications={userNotifications?.length}
          numberOfShoppingCartItems={userShoppingCartItems?.length}
        />

        <CategoriesPanel
          categoriesData={categoryItems}
          activeCategoryTitle={targetCategory}
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
                <ItemSlider
                  sliderItems={targetSliderItems}
                  activeCategory={activeCategory}
                  onToggleInCart={(id) => handleToggleItemInShoppingCart(id)}
                />
                <TabsPanel tabsData={collectionItems} />
              </>
            )}
          </LeftPanel>

          <RightPanel>
            <OfferSidebar
              offerItems={offerItems}
              onToggleInCart={(id) => handleToggleItemInShoppingCart(id)}
            />

            <AllOffersButtonContainer>
              <Button variant="primary">
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

        <Footer />
      </StyledCategoryPage>
    </DocumentTitle>
  );
};

export default CategoryPage;
