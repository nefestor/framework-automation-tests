/// <reference types="cypress" />

import loginData from "../fixtures/login"
import newDemandData from "../fixtures/new-demand";
import Login from "../support/pages/login/login";
import NewDemand from "../support/pages/demands/new-demand"

context("Login Tests", () => {
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.clearCookies();
        Login.visit();
        Login.doLogin(loginData.user, loginData.password);
        NewDemand.visit();
    });

    it.only("Should register a new demand", () => { //Repete o teste em até 3x, se for necessário, para que não haja problema com o codigo e nomes unicos.
        cy.get(NewDemand.codeInput).type(newDemandData.randomCode);
        cy.get(NewDemand.nameInput).type(newDemandData.randomName);
        cy.get(NewDemand.completeType).check();
        cy.get(NewDemand.scenariosInput).type(newDemandData.randomScenarios);
        cy.contains('button', NewDemand.submitFormButton).click();
        cy.get(NewDemand.resultMessage).should('contain.text', newDemandData.successMessage);
    });

    it("Should validate if fields are required", () => {
        cy.contains('button', NewDemand.submitFormButton).click();
        cy.get(NewDemand.form).should('contain.text', newDemandData.codeRequired);
        cy.get(NewDemand.form).should('contain.text', newDemandData.nameRequired);
        cy.get(NewDemand.form).should('contain.text', newDemandData.scenariosRequired);
        cy.get(NewDemand.form).should('contain.text', newDemandData.typeRequired);
    });
});
