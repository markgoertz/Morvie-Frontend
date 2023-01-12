describe("Keycloak-pages registration", () => {
  it("Access Keycloak registry page", () => {
    cy.visit(
      "http://localhost:2222/realms/Morvie/protocol/openid-connect/auth?client_id=MyApp&redirect_uri=https%3A%2F%2Fmorvie-frontend-markgoertz.vercel.app%2F",
      () => {
        cy.get("a").contains("Register").click();
      }
    );
  });
  
  it("Login Keycloak on login page correct login credentials", () => {
    cy.visit("https://morvie-frontend-markgoertz.vercel.app/");
    cy.origin("https://morvie-frontend-markgoertz.vercel.app/movie/315162", () => {
      cy.get("#username").type("Cypress");
      cy.get("#password").type("Bot12345!");
      cy.get("#kc-login").click();
    });
    cy.wait(2000);
    cy.get("watchbutton").click();
  });
});