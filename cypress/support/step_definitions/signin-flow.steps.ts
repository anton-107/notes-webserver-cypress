// describe("My First Test", () => {
//   it("Visits home page", () => {
//     cy.visit("http://localhost:3000/home");
//   });
// });

import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("I open home page", () => {
  cy.visit("http://localhost:3000/home");
});
Then("I see {string} in the title", (title) => {
  cy.title().should("equal", title);
});
