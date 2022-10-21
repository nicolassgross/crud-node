var prompt = require("prompt-sync")();

var contador = 0;

var usuarios = [];
var emails = [];
var idades = [];

console.log(`
    Bem-vindo ao CRUD de usuários
    1 - Acessar Menu
    2 - Sair
`);
var comeco = prompt();
console.clear();

while (comeco == 1) {
    console.log(`
        Escolha uma das opções abaixo
        1 - Cadastrar usuários
        2 - Listar todos os usuários
        3 - Listar usuários pelo nome
        4 - Sair
    `);
    var opcao_menu = prompt();
    console.clear();

    if (opcao_menu == 1) {
        console.log(`Insira os dados do(a) usuários`);
        var nome = prompt("Insira o nome: ");
        var email = prompt("Insira o email: ");
        var idade = prompt("Insira a idade: ");

        console.log(`
            Confirma o cadastro abaixo?
            Usuário: ${nome}
            E-mail: ${email}
            Idade: ${idade}
            
            1 - SIM
            2 - NÃO
        `)

        if (prompt() == 1) {
            contador++;

            usuarios.push(nome);
            emails.push(email);
            idades.push(idade);

            console.clear();
            console.log(`
                Usuário cadastrado sucesso!

                Deseja voltar ao comeco ou sair?
                1 - Voltar ao comeco
                2 - Sair
            `);

            if (prompt() == 2) {
                comeco = 2;
            }
            console.clear();
        }
    } else if (opcao_menu == 2) {
        for (var id = 0; id < contador; id++) {
            console.log(`
                Nome: ${usuarios[id]}
                E-mail: ${emails[id]}
                Idade: ${idades[id]}
            `);
        }
    } else if (opcao_menu == 3) {
        var busca_nome = prompt("Insira o nome ou sobrenome do usuário que deseja buscar(mínimo de 3 letras): ");
        var achou = false;

        for (var id = 0; id < contador; id++) {
            if (busca_nome == usuarios[id].substring(0, 3)) {
                console.log(`
                    Nome: ${usuarios[id]}
                    E-mail: ${emails[id]}
                    Idade: ${idades[id]}
                `);
                achou = true;
            }
        }

        if (achou == false) {
            console.log('Nenhum usuário encontrado');
        }
    } else {
        comeco = 2;
    }
}
