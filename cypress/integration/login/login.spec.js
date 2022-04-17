context("Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/auth");
  });

  it("Kullanıcı Adı Şifre Yanlış Uyarısı", () => {
    cy.get('input[name="email"]').type("test");
    cy.get('input[name="password"]').type("test");
    cy.get("button[type=submit]").click();
    cy.get('[data-test-id="error-text"]').should(
      "contain.text",
      "Kullanıcı adı veya şifreyi yanlış girdiniz"
    );
  });

  it("Kullanıcı Giriş Yapılabilmeli", () => {
    cy.get('input[name="email"]').type("admin");
    cy.get('input[name="password"]').type("123456");
    cy.get("button[type=submit]").click();
    cy.url().should("include", "/dashboard");
  });
});
