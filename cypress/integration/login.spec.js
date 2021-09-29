/// <reference types="cypress" />

import data from "../fixtures/login"
import Login from "../support/pages/login/login";

context("Login Tests", () => {
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.clearCookies();
    });

    it("Should login", () => {
        Login.visit();
        Login.doLogin(data.user, data.password);
        cy.get(Login.resultMessage).should('contain.text', data.successLoginMessage);
    });

    it("Should fail with invalid pasword", () => {
        Login.visit();
        Login.doLogin(data.user, data.invalidPassword);
        cy.get(Login.resultMessage).should('contain.text', data.failLoginMessage);
    });

    it("Should fail with invalid user", () => {
        Login.visit();
        Login.doLogin(data.invalidUser, data.password);
        cy.get(Login.resultMessage).should('contain.text', data.failLoginMessage);
    });

    it("Should warning when submit without password", () => {
        Login.visit();
        Login.doLogin(data.invalidUser, null);
        cy.get(Login.warningMessage).should('contain.text', data.passwordWarningMessage);
    });

    it("Should warning when submit without password", () => {
        Login.visit();
        Login.doLogin(null, data.password);
        cy.get(Login.warningMessage).should('contain.text', data.userWarningMessage);
    });
});
