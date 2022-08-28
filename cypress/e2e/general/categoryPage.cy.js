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
});
