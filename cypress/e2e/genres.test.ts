describe('Genres Component', () => {
  it('should load the genres list and select a genre', () => {
    cy.visit('/');

    const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
    genres.forEach((genre) => {
      cy.contains(genre).should('be.visible');
    });

    cy.contains('All').click();

    cy.findByText(/All/i).should(($s) => {
      expect($s).to.have.length(1);
      const className = $s[0].className;
      expect(className).to.match(/genres__button--selected/gi);
    });
  });
});
