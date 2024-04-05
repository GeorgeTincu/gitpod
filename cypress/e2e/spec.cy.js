describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
    cy.get(".navbar-nav>li")
      .eq(0)
      .click()
      .should("have.class", "dropdown open")
      .and("be.visible");
    cy.get(".dropdown-menu>li").eq(2).click();
    cy.get(".dropdown-menu>li").eq(2).should("have.class", "active");
    cy.get("#password1").focus().should("have.class", "focus");
    cy.get(".action-form").type("mama").submit();
    cy.get(".action-form")
      .next()
      .should("have.text", "Your form has been submitted!");
  });
});
