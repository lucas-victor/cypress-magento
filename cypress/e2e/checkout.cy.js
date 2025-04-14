

const shipping = Cypress.env('shippingData')

describe('Finalizar compra', () => {
  before(() => { 
    cy.login(shipping.email, shipping.password)
    cy.addProdutoAoCarrinho()
  })

  it.only('deve finalizar compra com sucesso', () => {
    cy.visit('/checkout/cart/')
    //cy.contains('shopping cart').click()
    //cy.get('input[name="street[0]"]').type('Rua Teste 123')
    //cy.pause()
    cy.get('span').contains('Proceed to Checkout').click()
    cy.wait(2000)
    cy.get('span').contains('Proceed to Checkout').click()

    //Arrange


    cy.wait(3000)
    // Act
    cy.get('#customer-email').type(shipping.email)
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
    cy.contains('Place Order').click()
    cy.contains('Thank you for your purchase!').should('be.visible')
  })
})