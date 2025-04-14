const shipping = Cypress.env('shippingData')

describe('Validação de detalhes do pedido', () => {
    beforeEach(() => {
      cy.login(shipping.myemail, shipping.mypass) 
    })
  
    it('Deve acessar os detalhes do pedido', () => {
      cy.visit('/sales/order/history/')
      
      // verificar lista de pedidos
      cy.contains('My Orders').should('be.visible')
    })
  })