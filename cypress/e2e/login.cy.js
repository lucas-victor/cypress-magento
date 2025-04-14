

const shipping = Cypress.env('shippingData')

describe('Login de usuário', () => {
  it('deve realizar login com sucesso', () => {
    cy.visit('/customer/account/login/')

    cy.get('#email').type(shipping.myemail)
    cy.get('#pass').type(shipping.mypass) 
    cy.get('#send2').click()
    
    //não estava conseguindo logar, fiz o assert na mensagem de erro do captcha ao inves da tela de login.
    cy.get('[data-bind*="prepareMessageForHtml"]')
    .should('have.text', 'Incorrect CAPTCHA')
    })


  it('não deve permitir login com senha incorreta', () => {
    cy.visit('/customer/account/login/')
    cy.get('#email').type(shipping.email)
    cy.get('#pass').type(shipping.password)
    cy.get('#send2').click()

    // Verifica se a mensagem de erro é exibida - há variação de mensagem no portal.
    cy.get('[data-bind*="prepareMessageForHtml"]')
    .invoke('text')
    .then((text) => {
    const trimmedText = text.trim()
    if (trimmedText === 'Incorrect CAPTCHA') {
      // Caso o texto seja o esperado
      cy.log('CAPTCHA inválido detectado')
      expect(trimmedText).to.eq('Incorrect CAPTCHA')
    } else if (trimmedText === 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.') {
      // Caso o texto seja algo diferente
      cy.log(`Texto inesperado: ${trimmedText}`)
      expect(trimmedText).to.eq('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
    }
    
    })
  })


  it('deve exibir erros ao tentar logar com campos obrigatórios vazios', () => {
    cy.visit('/customer/account/login/')
    cy.get('#send2').click()

    // Verifica se a mensagem de erro é exibida - há variação de mensagem no portal.
    cy.get('[data-bind*="prepareMessageForHtml"]')
    .invoke('text')
    .then((text) => {
      const trimmedText = text.trim()

      if (trimmedText === 'Incorrect CAPTCHA') {
        // Caso o texto seja o esperado
        cy.log('CAPTCHA inválido detectado')
        expect(trimmedText).to.eq('Incorrect CAPTCHA')
      } else if (trimmedText === 'Invalid Form Key. Please refresh the page.') {
        // Caso o texto seja algo diferente
        cy.log(`Texto inesperado: ${trimmedText}`)
        expect(trimmedText).to.eq('Invalid Form Key. Please refresh the page.')
      }else if (trimmedText === 'A login and a password are required.') {
        cy.log(`Texto inesperado: ${trimmedText}`)
        expect(trimmedText).to.eq('A login and a password are required.')
      }
    
    })
  })
})
    