const shipping = Cypress.env('shippingData')

describe('Esqueci minha senha', () => {
    it('Deve enviar o email de redefinição de senha com sucesso', () => {
      cy.visit('/customer/account/forgotpassword/')
      cy.get('#email_address').type(shipping.myemail)
      cy.get('#captcha_user_forgotpassword').type(shipping.mypass)
      cy.get('.submit').click()
  
      // Verificação
      cy.contains('Incorrect CAPTCHA').should('be.visible')
    })
  })