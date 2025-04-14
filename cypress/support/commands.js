Cypress.Commands.add('login', (email, senha) => {
  cy.visit('/customer/account/login/');
  cy.get('#email').type(email);
  cy.get('#pass').type(senha);
  cy.get('#send2').click();
});

Cypress.Commands.add('addProdutoAoCarrinho', () => {
  cy.visit('/');
  cy.get('.product-item').contains('Breathe-Easy Tank').click()
  cy.get('#option-label-size-157-item-172').click();
  cy.get('#option-label-color-93-item-57').click();
  cy.get('#product-addtocart-button').click();
});