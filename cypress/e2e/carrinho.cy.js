describe('Adicionar produto ao carrinho', () => {
  it('deve adicionar produto à sacola com sucesso', () => {
    cy.visit('/')
    cy.addProdutoAoCarrinho()
    //cy.get('.product-item').contains('Breathe-Easy Tank').click()
    //cy.get('#option-label-size-157-item-172').click()
    //cy.get('#option-label-color-93-item-57').click()
    //cy.get('#product-addtocart-button').click()
    
    //cy.get('.action showcart').click()
    
    cy.contains('You added').should('be.visible')
  })
})