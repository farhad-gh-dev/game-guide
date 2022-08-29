import React from "react";
import { useCategory } from "./useCategory";
import { useUserInfo } from "../../Hooks/useUserInfo";
import { Helmet } from "react-helmet";
import helpers from "../../Helpers";
import {
  StyledCategoryPage,
  PageContentContainer,
  LoadingContainer,
  MainContent,
  Sidebar,
  AllOffersButtonContainer,
} from "./CategoryPage.styled";
import {
  TopBar,
  CategoriesPanel,
  ItemSlider,
  OfferCards,
  TabsPanel,
  Footer,
} from "../../Components";
import { Loading, Button, CustomIcon } from "game-guide-ui-kit";
import { Navigate } from "react-router-dom";

const CategoryPage: React.FC = () => {
  const {
    userProfileInfo,
    userNotifications,
    userShoppingCartItems,
    handleToggleItemInShoppingCart,
  } = useUserInfo();

  const {
    isLoading,
    categoryIsNotValid,
    allCategories,
    activeCategory,
    categorySliderItems,
    offerItems,
    collectionItems,
  } = useCategory(userShoppingCartItems);

  if (categoryIsNotValid) return <Navigate to="/404" />;

  const pageTitle = `Game Guide Store | ${helpers.string.capitalize(
    activeCategory
  )} Category`;

  return (
    <StyledCategoryPage>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <TopBar
        profileData={userProfileInfo}
        numberOfNotifications={userNotifications?.length}
        numberOfShoppingCartItems={userShoppingCartItems?.length}
      />

      <CategoriesPanel
        categoriesData={allCategories}
        activeCategoryTitle={activeCategory}
        onSearch={(searchTerm) => console.log(searchTerm)}
      />

      <PageContentContainer>
        <MainContent>
          {!activeCategory || isLoading ? (
            <LoadingContainer>
              <Loading />
            </LoadingContainer>
          ) : (
            <>
              <ItemSlider
                sliderItems={categorySliderItems}
                activeCategory={activeCategory}
                onToggleInCart={(id) => handleToggleItemInShoppingCart(id)}
              />
              <TabsPanel tabsData={collectionItems} />
            </>
          )}
        </MainContent>

        <Sidebar>
          <OfferCards
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
        </Sidebar>
      </PageContentContainer>

      <Footer />
    </StyledCategoryPage>
  );
};

export default CategoryPage;
