const shipping = Cypress.env('shippingData')

describe('Validação da lista de pedidos', () => {
    beforeEach(() => {
      cy.login(shipping.myemail, shipping.mypass) 
    })
  
    it('Deve acessar a lista de pedidos do usuário', () => {
      cy.visit('/sales/order/history/')
      
      // Verifica se há pedidos listados
      cy.get('.order-number').should('exist')
    })
  })