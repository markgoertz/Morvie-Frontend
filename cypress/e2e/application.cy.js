describe("Application pages", () => {
  it("Access Keycloak registry page", () => {
    cy.visit(
      "http://localhost:2222/realms/Morvie/protocol/openid-connect/auth?client_id=MyApp&redirect_uri=https%3A%2F%2Fmorvie-frontend-markgoertz.vercel.app%2F",
      () => {
        cy.get("a").contains("Register").click();
      }
    );
  });

  it("Access Movies page", () => {
    cy.visit("https://morvie-frontend-markgoertz.vercel.app/");
    cy.origin("http://localhost:2222/", () => {
      cy.get("#username").type("Cypress");
      cy.get("#password").type("Bot12345!");
      cy.get("#kc-login").click();
    });
    cy.wait(2000);
    cy.get("h3").contains("Movie").click();
    });

  it("Access Movies detailed page", () => {
    cy.visit("https://morvie-frontend-markgoertz.vercel.app/movie");
    cy.origin("http://localhost:2222/", () => {
      cy.get("#username").type("Cypress");
      cy.get("#password").type("Bot12345!");
      cy.get("#kc-login").click();
    });
    cy.wait(2000);
    cy.get("a").contains("Puss in Boots: The Last Wish").click();
    cy.on("#casts", (txt) => {
      expect(txt).to.equal("Antonio Banderas");
    });
  });

  it("Post thread in detailed page", () => {
    cy.visit("https://morvie-frontend-markgoertz.vercel.app/movie");
    cy.origin("http://localhost:2222/", () => {
      cy.get("#username").type("Cypress");
      cy.get("#password").type("Bot12345!");
      cy.get("#kc-login").click();
    });
    cy.wait(2000);
    cy.get("a").contains("Puss in Boots: The Last Wish").click();
    cy.wait(2000);
    cy.get("button").contains("Open form").click();
    cy.get("topicName").type("Automated Testing with Cypress");
    cy.get("content").type("This is fully automated POST test!");

    cy.get("button").contains("Submit").click();

    //Checking the window alert text
    cy.on("window:alert", (txt) => {
      //Assertion
      expect(txt).to.contains("Thread successfully created!");
    });
  });
});
