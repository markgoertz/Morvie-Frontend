describe("Visit vercel app", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
  });
});

describe("Keycloak-pages", () => {
  it("Access Keycloak registry page", () => {
    cy.visit("http://localhost:3000/");
    cy.origin("http://localhost:2222/", () => {
      cy.get("a").contains("Register").click();
    });
  });

  it("Registry of a user should not be automated", () => {
    cy.visit("http://localhost:3000/");
    cy.origin("http://localhost:2222/", () => {
      cy.get("a").contains("Register").click();
      cy.get("#firstName").type("Cypress");
      cy.get("#lastName").type("bot");
      cy.get("#email").type("cypress.bot@mail.com");
      cy.get("#username").type("Im am a bot!");
      cy.get("#password").type("Bot123!");
      cy.get("#password-confirm").type("Bot123!");
      cy.get("#kc-form-buttons").click();

      //Checking the window alert text
      cy.on("window:alert", (txt) => {
        //Assertion
        //Assertion
        expect(txt).to.contains("Invalid Recaptcha");
      });
    });
  });
});
