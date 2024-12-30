describe('Verificações de pagina de login', () => {

    beforeEach(() => {
        cy.visit('')
    });

    it('Login com sucesso', () => {
        cy.login('Admin', 'admin123')
        cy.get('.oxd-layout-context').should('exist')
    });

    it('Username incorreto', () => {
        cy.login('-', 'admin123')
        cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    });

    it('Password incorreto', () => {
        cy.login('Admin', '-')
        cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
    });

    it.only('Não inserir credenciais', () => {
        cy.login('', '')
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should( 'have.text', 'Required')
        cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should( 'have.text', 'Required')
    });
});