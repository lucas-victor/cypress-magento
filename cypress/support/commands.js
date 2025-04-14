const shipping = Cypress.env('shippingData')

Cypress.Commands.add('login', (login, senha) => {
  cy.visit('/customer/account/login/');
  cy.get('#email').type(login);
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

Cypress.Commands.add('addInformacoesUsuarioShippingAddress', () => {
  cy.get('#customer-email').type(shipping.myemail)
  cy.get('input[name="firstname"]').type(shipping.firstName)
  cy.get('input[name="lastname"]').type(shipping.lastName)
  cy.get('input[name="company"]').type(shipping.company)
  cy.get('input[name="street[0]"]').type(shipping.street)
  cy.get('select[name="country_id"]').select(shipping.country)
  cy.get('select[name="region_id"]').select(shipping.state)
  cy.get('input[name="city"]').type(shipping.city)
  cy.get('input[name="postcode"]').type(shipping.zip)
  cy.get('input[name="telephone"]').type(shipping.phone)


  cy.get('[value="flatrate_flatrate"]').first().check()
  cy.get('[value="tablerate_bestway"]').first().check()
  
  // Assert (o botão Next deve estar habilitado e pode ser clicado)
  cy.get('button.continue')
    .should('be.visible')
    .and('not.be.disabled')
    .click()
   cy.wait(2000)
   //finaliza compra
   cy.contains('Place Order').click()
   cy.contains('Thank you for your purchase!').should('be.visible')
});