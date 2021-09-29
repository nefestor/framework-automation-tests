var faker = require('faker');

module.exports = {
    "randomCode": faker.datatype.number(9999999999),
    "randomName": faker.name.title(),
    "randomScenarios": faker.datatype.number(99),
    "successMessage": "Cadastro realizado com sucesso!",
    "codeRequired": "Preencha o Código da Demanda!",
    "nameRequired": "Preencha o Nome da Demanda!",
    "scenariosRequired": "Preencha o Número de cenários!",
    "typeRequired": "Selecione o Tipo da Demanda!"
}
