describe("Genres Component", () => {
  it("should load the genres list and select a genre", () => {
    cy.visit("/");

    const genres = ["All", "Documentary", "Comedy", "Horror", "Crime"];
    genres.forEach((genre) => {
      cy.contains(genre).should("be.visible");
    });

    cy.contains("All").click();

    /* TODO: fix in future why this class check fails */
    cy.contains("All").should("have.class", "genres__button--selected");
  });
});
