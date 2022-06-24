import { Given, When } from "cypress-cucumber-preprocessor/steps";

Given(
  "I am logged in as {string} using password {string}",
  (user: string, password: string) => {
    cy.visit(`/home`);
    cy.get(`*[data-testid=sign-in-link]`).click();
    cy.get(`*[data-testid=user-login]`).focus().type(user);
    cy.get(`*[data-testid=user-password]`)
      .focus()
      .type(password)
      .type("{enter}");
    cy.get(`*[data-testid=user-greeting]`).should(
      "have.text",
      `hello ${user}!`
    );
  }
);
When("I visit {string} page", (path) => {
  cy.visit(`${path}`);
});
