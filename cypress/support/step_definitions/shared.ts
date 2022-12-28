import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

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
Given(
  "I am logged in as {string} using password {string} (via single-page app)",
  (user: string, password: string) => {
    cy.visit(`/`);
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
