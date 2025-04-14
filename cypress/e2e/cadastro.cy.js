describe('Cadastro de novo usuário', () => {
  it('deve cadastrar um novo usuário com sucesso', () => {
    cy.visit('/customer/account/create/');
    cy.get('#firstname').type('Maria');
    cy.get('#lastname').type('Teste');
    cy.get('#email_address').type(`maria${Date.now()}@teste.com`);
    cy.get('#password').type('Teste1234!');
    cy.get('#password-confirmation').type('Teste1234!');
    cy.get('button[title="Create an Account"]').click();

    cy.contains('Thank you for registering').should('be.visible');
  });
});