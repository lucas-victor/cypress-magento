

const shipping = Cypress.env('shippingData')

describe('Realizar compra', () => {
  before(() => { 
    cy.login(shipping.myemail, shipping.mypass)
  })

  it.only('deve finalizar compra com sucesso', () => {
    cy.addProdutoAoCarrinho()

    cy.visit('/checkout/cart/')
    //cy.contains('shopping cart').click()
    //cy.get('input[name="street[0]"]').type('Rua Teste 123')
    //cy.pause()
    cy.get('span').contains('Proceed to Checkout').click()
    cy.wait(2000)
    cy.get('span').contains('Proceed to Checkout').click()

    //Arrange


    cy.wait(4000)
    // Act
    cy.addInformacoesUsuarioShippingAddress()

  })
})