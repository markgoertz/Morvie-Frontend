describe("Visit vercel app", () => {
  it("passes", () => {
    cy.visit("https://morvie-frontend-markgoertz.vercel.app");
  });
});

describe("Visit docker app", () => {
  it("passes", () => {
    cy.visit(
      "http://localhost:2222/realms/Morvie/protocol/openid-connect/auth?client_id=MyApp&redirect_uri=https%3A%2F%2Fmorvie-frontend-markgoertz.vercel.app%2F"
    );
  });
});

describe("Keycloak-pages registration", () => {
  it("Access Keycloak registry page", () => {
    cy.visit(
      "http://localhost:2222/realms/Morvie/protocol/openid-connect/auth?client_id=MyApp&redirect_uri=https%3A%2F%2Fmorvie-frontend-markgoertz.vercel.app%2F",
      () => {
        cy.get("a").contains("Register").click();
      }
    );
  });

  it("Registry of a user should not be automated", () => {
    cy.visit("https://morvie-frontend-markgoertz.vercel.app/");
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

  it("Registry of a user should not be automated", () => {
    cy.visit("https://morvie-frontend-markgoertz.vercel.app/");
    cy.origin("http://localhost:2222/", () => {
      cy.get("a").contains("Register").click();
      cy.get("#firstName").type("Cypress");
      cy.get("#lastName").type("bot");
      cy.get("#email").type("cypress.bot@mail.com");
      cy.get("#username").type("Im am a bot!");
      cy.get("#password").type("Bot123!");
      cy.get("#password-confirm").type("Bot123!");
      cy.get("#kc-form-buttons").click();
    });
  });
});

describe("Keycloak-pages login", () => {
  it("Access Keycloak login page with false login credentials", () => {
    cy.visit("https://morvie-frontend-markgoertz.vercel.app/");
    cy.origin("http://localhost:2222/", () => {
      cy.get("#username").type("Cypress");
      cy.get("#password").type("Bot");
      cy.on("#input-error", (txt) => {
        expect(txt).to.contains("Invalid username or password.");
      });
    });
  });

  it("Login Keycloak on login page correct login credentials", () => {
    cy.visit("https://morvie-frontend-markgoertz.vercel.app/");
    cy.origin("http://localhost:2222/", () => {
      cy.get("#username").type("Cypress");
      cy.get("#password").type("Bot12345!");
      cy.get("#kc-login").click();
    });
    cy.on("#trending", (txt) => {
        expect(txt).to.equal("Trending Movies");
    });
  });
});

describe("Morvie overview", () => {
  it("Receive movie details", () => {
    cy.visit("https://morvie-frontend-markgoertz.vercel.app/");
    cy.origin("http://localhost:2222/", () => {
      cy.get("#username").type("Cypress");
      cy.get("#password").type("Bot");
      cy.on("#input-error", (txt) => {
        expect(txt).to.contains("Invalid username or password.");
      });
    });
  });

  it("Login Keycloak on login page correct login credentials", () => {
    cy.visit("https://morvie-frontend-markgoertz.vercel.app/");
    cy.origin("http://localhost:2222/", () => {
      cy.get("#username").type("Cypress");
      cy.get("#password").type("Bot12345!");
      cy.get("#kc-login").click();
    });
    cy.on("#trending", (txt) => {
        expect(txt).to.equal("Trending Movies");
    });
  });
});