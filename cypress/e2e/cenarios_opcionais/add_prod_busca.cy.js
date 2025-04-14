describe('Adicionar produto ao carrinho pela busca', () => {
  it('Deve buscar e adicionar um produto ao carrinho', () => {
    cy.visit('/')
    
    // Fazer uma busca
    cy.get('#search').type('Layla Tee{enter}')
    
    // Clicar no produto encontrado
    cy.contains('Layla Tee').click()

    // Selecionar atributos do produto
    cy.get('#option-label-size-157-item-172').click()
    cy.get('#option-label-color-93-item-50').click()

    // Adicionar ao carrinho
    //cy.get('.product-item-inner').first().click({ force : true })
    cy.get('span').contains('Add to Cart').click({ force : true })

    // Verificar mensagem de sucesso
    cy.contains('You added').should('be.visible')
    cy.contains('shopping cart').click()
    cy.wait(2000)
    cy.get('span').contains('Proceed to Checkout').click()
    
    cy.wait(4000)
    cy.addInformacoesUsuarioShippingAddress()

  })
})