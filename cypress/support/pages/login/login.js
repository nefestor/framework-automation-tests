class LoginPage {

    userInput = '#login';
    passwordInput = '#senha';
    submitFormButton = 'input[type=submit]';
    resultMessage = '#result';
    warningMessage = 'label.error';
    
        visit() {
            cy.visit("/");
        }
    
        doLogin(user, password) {
            if(user)
                cy.get(this.userInput).type(user);
            if(password)
                cy.get(this.passwordInput).type(password);
            cy.get(this.submitFormButton).click();
        }
    }
    
    export default new LoginPage();