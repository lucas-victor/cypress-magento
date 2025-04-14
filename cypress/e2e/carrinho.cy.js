describe('Adicionar produto ao carrinho', () => {
  it('deve adicionar produto à sacola com sucesso', () => {
    cy.visit('/')

    cy.addProdutoAoCarrinho() 
    
    cy.contains('You added').should('be.visible')
  })
})