import React, { useCallback } from "react";
import { useCategory } from "./useCategory";
import { useUserInfo } from "../../Hooks/useUserInfo";
import { Helmet } from "react-helmet-async";
import helpers from "../../Helpers";
import {
  StyledCategoryPage,
  PageContentContainer,
  LoadingContainer,
  MainContent,
} from "./CategoryPage.styled";
import {
  TopBar,
  CategoriesPanel,
  ItemSlider,
  TabsPanel,
  OfferSidebar,
  Footer,
} from "../../Components";
import { Loading } from "game-guide-ui-kit";
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
  } = useCategory();

  const handleSearch = useCallback(
    (searchTerm: string) => console.log(searchTerm),
    []
  );

  if (categoryIsNotValid) return <Navigate to="/404" />;

  const pageTitle = `Game Guide Store | ${helpers.string.capitalize(
    activeCategory
  )} Category`;

  return (
    <StyledCategoryPage>
      <Helmet prioritizeSeoTags>
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
        onSearch={handleSearch}
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
                shoppingCartItems={userShoppingCartItems}
                activeCategory={activeCategory}
                onToggleInCart={handleToggleItemInShoppingCart}
              />
              <TabsPanel tabsData={collectionItems} />
            </>
          )}
        </MainContent>

        <OfferSidebar
          offerItems={offerItems}
          shoppingCartItems={userShoppingCartItems}
          onToggleItemInCart={handleToggleItemInShoppingCart}
        />
      </PageContentContainer>

      <Footer />
    </StyledCategoryPage>
  );
};

export default CategoryPage;
