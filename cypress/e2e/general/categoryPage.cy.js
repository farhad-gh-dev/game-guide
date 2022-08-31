/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("category page", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("http://localhost:3000");
  });

  it("check default active category", () => {
    cy.get('a[href*="all genres"] > button').should(
      "have.css",
      "background-color",
      "rgb(243, 61, 61)"
    );
  });

  it("Add and remove slider item to shopping cart", () => {
    // Add to cart
    cy.get('[data-testid="slide-1"] button').click();
    cy.get('button[aria-label="shopping cart"] span')
      .should("be.visible")
      .contains("1");

    // Remove from cart
    cy.get('[data-testid="slide-1"] button').click();
    cy.get('button[aria-label="shopping cart"] span').should("not.exist");
  });

  it("Add and remove offer item to shopping cart", () => {
    const targetOfferAddToCartButton = cy
      .get('aside button[aria-label="Add To Cart"]')
      .first();

    // Add to cart
    targetOfferAddToCartButton.click();
    cy.get('button[aria-label="shopping cart"] span')
      .should("be.visible")
      .contains("1");

    // Remove from cart
    targetOfferAddToCartButton.click();
    cy.get('button[aria-label="shopping cart"] span').should("not.exist");
  });
});
