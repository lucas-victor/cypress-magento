const shipping = Cypress.env('shippingData')

describe('Cadastro de novo usuário', () => {
  it('deve cadastrar um novo usuário com sucesso', () => {
    cy.visit('/customer/account/create/')
    cy.get('#firstname').type(shipping.firstName)
    cy.get('#lastname').type(shipping.lastName)
    cy.get('#email_address').type(shipping.email)
    cy.get('#password').type(shipping.password)
    cy.get('#password-confirmation').type(shipping.password)
    cy.get('button[title="Create an Account"]').click()

    cy.contains('Thank you for registering').should('be.visible')
  })
})