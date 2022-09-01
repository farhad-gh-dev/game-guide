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

  it("Check slider auto play", () => {
    cy.wait(4000);
    cy.get('[data-testid="slide-1"]').should("not.be.visible");
    cy.get('[data-testid="slide-2"]').should("be.visible");
  });

  it("Change active slide", () => {
    cy.get('.slider-control-container [data-testid="indicator-4"]')
      .last()
      .click();
    cy.get('[data-testid="slide-4"]').should("be.visible");
  });

  it("Add and remove slider item to shopping cart", () => {
    const targetSliderItemAddToCartButton = cy.get(
      '[data-testid="slide-1"] button'
    );

    // Add to cart
    targetSliderItemAddToCartButton.click();
    cy.get('button[aria-label="shopping cart"] span')
      .should("be.visible")
      .contains("1");

    // Remove from cart
    targetSliderItemAddToCartButton.click();
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
