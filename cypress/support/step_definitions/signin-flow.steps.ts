Then("I see {string} element", (elementID) => {
  cy.get(`*[data-testid=${elementID}]`)
    .first()
    .as("currentElement")
    .should("be.visible");
});
And("I do not see {string} element", (elementID) => {
  cy.get(`*[data-testid=${elementID}]`).should("not.exist");
});
When("I click on it", () => {
  cy.get("@currentElement").click();
});
Then("I am navigated to {} page", (path: string) => {
  const normalizedPath = path.replace(/'/g, "");
  const regex = normalizedPath.replace("{notebook-id}", "[A-z0-9]{1,32}");
  cy.url().should("match", new RegExp(regex));
});
And("I focus on it and type {string}", (value) => {
  cy.get("@currentElement").focus();
  cy.get("@currentElement").type(value);
});
And("I press 'Enter' on keyboard", () => {
  cy.get("@currentElement").type("{enter}");
});

And("it has inner text of {string}", (value) => {
  cy.get("@currentElement").should("have.text", value);
});
