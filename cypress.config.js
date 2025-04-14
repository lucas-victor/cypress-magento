const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento2-demo.magebit.com',
    supportFile: 'cypress/support/e2e.js',
    fixturesFolder: 'cypress/fixtures',
    specPattern: 'cypress/e2e/**/*.cy.js'
    
  },
  env: {
    userEmail: 'teste@exemplo.com',
    shippingData: {
      firstName: 'João',
      lastName: 'Silva',
      company: 'Empresa XYZ',
      street: 'Rua das Flores, 123',
      country: 'United States',
      state: 'California',
      city: 'Los Angeles',
      zip: '90001',
      phone: '1234567890',
      email: `joao${Date.now()}@teste.com`,
      password: 'Teste1234!',
      myemail: 'lucas.a.victor@gmail.com',
      mypass: 'test1123'
      
     }   
  }
})