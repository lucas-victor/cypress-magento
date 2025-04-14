describe('Adicionar produto ao carrinho pela página do produto', () => {
  it('Deve adicionar com sucesso', () => {
    cy.visit('/layla-tee.html')
    
    // Selecionar atributos do produto
    cy.get('#option-label-size-157-item-172').click()
    cy.get('#option-label-color-93-item-50').click()

    // Adicionar ao carrinho
    cy.get('#product-addtocart-button').click()

    // Verificar mensagem de sucesso
    cy.contains('You added').should('be.visible')
  })
})