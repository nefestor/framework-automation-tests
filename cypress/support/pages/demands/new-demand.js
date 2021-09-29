class NewDemandPage {

    codeInput = '#codigo';
    nameInput = '#nome';
    completeType = "input[type=radio]input[value='1']";
    parcialType = "input[type=radio][value='2']";
    scenariosInput = '#cenarios';
    warningMessage = 'label.error';
    submitFormButton = 'Cadastrar';
    resultMessage = '#resultado';
    codeErrorMessage = 'label.error[for=codigo]';
    nameErrorMessage = 'label.error[for=nome]';
    form = '.cadastro';


    visit() {
        cy.visit("/cadastrar.php");
    }
}

export default new NewDemandPage();