/// <reference types = "cypress"/>

class LoginPage{
    get lbUsername() {return cy.get('.oxd-form [name="username"]')}
    get lbPassword() {return cy.get('.oxd-form [name="password"]')}
    get btnLogin() {return cy.get('.oxd-form [type="submit"]')}


    login(username, password){
        console.log()
        if(username == ''){this.lbUsername.clear()}else{this.lbUsername.type(username)}
        if(password == ''){this.lbPassword.clear()}else{this.lbPassword.type(password)}
        this.btnLogin.click()
    }
}
export default LoginPage;