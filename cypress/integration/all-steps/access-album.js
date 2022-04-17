context("Access Album Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/auth");
  });

  it("Kullanıcı Albüm ekranına ulaşabilmeli", () => {
    cy.get('input[name="email"]').type("admin");
    cy.get('input[name="password"]').type("123456");
    cy.get("button[type=submit]").click();
    cy.url().should("include", "/dashboard");
    cy.get('button[name="album"]').click();
    cy.url().should("include", "/album");
  });
});
