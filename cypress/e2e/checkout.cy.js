describe('Finalizar compra', () => {
  before(() => {
    cy.login('seuemail@teste.com', 'Teste1234!');
    cy.addProdutoAoCarrinho();
  });

  it.only('deve finalizar compra com sucesso', () => {
    cy.visit('/checkout/cart/');
    //cy.contains('shopping cart').click();
    //cy.get('input[name="street[0]"]').type('Rua Teste 123');
    //cy.pause()
    cy.get('span').contains('Proceed to Checkout').click();
    cy.wait(2000)
    cy.get('span').contains('Proceed to Checkout').click();

    // Arrange
    const shippingData = {
      email: 'teste@exemplo.com',
      firstName: 'João',
      lastName: 'Silva',
      company: 'Empresa XYZ',
      street: 'Rua das Flores, 123',
      country: 'United States',
      state: 'California',
      city: 'Los Angeles',
      zip: '90001',
      phone: '1234567890',
    };

    cy.wait(3000)
    // Act
    cy.get('#customer-email').type(shippingData.email);
    cy.get('input[name="firstname"]').type(shippingData.firstName);
    cy.get('input[name="lastname"]').type(shippingData.lastName);
    cy.get('input[name="company"]').type(shippingData.company);
    cy.get('input[name="street[0]"]').type(shippingData.street);
    cy.get('select[name="country_id"]').select(shippingData.country);
    cy.get('select[name="region_id"]').select(shippingData.state);
    cy.get('input[name="city"]').type(shippingData.city);
    cy.get('input[name="postcode"]').type(shippingData.zip);
    cy.get('input[name="telephone"]').type(shippingData.phone);


    cy.get('[value="flatrate_flatrate"]').first().check()
    cy.get('[value="tablerate_bestway"]').first().check()
    


    // Assert (o botão Next deve estar habilitado e pode ser clicado)
    cy.get('button.continue')
      .should('be.visible')
      .and('not.be.disabled')
      .click();
    cy.wait(2000)
    cy.contains('Place Order').click();
    cy.contains('Thank you for your purchase!').should('be.visible');
  });
});