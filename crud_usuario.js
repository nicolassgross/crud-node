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
        1 - Cadastrar usuário
        2 - Alterar usuário
        3 - Remover usuário
        4 - Listar todos os usuários
        5 - Listar usuários pelo nome
        6 - Sair
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
        }
    } else if (opcao_menu == 2) {
        //altera
        var busca_id_alterar = prompt("Insira ID do usuário que deseja alterar o registro: ");

        verificaArrayUsuariosId(busca_id_alterar);

        console.log(`
            Qual dado você deseja alterar?
            1 - Nome
            2 - Email
            3 - Idade
        `)

        alterarDadosUsuario(busca_id_alterar);

    } else if (opcao_menu == 3) {
        //remove
        var busca_id_remover = prompt("Insira ID do usuário que deseja remover o registro: ");

        verificaArrayUsuariosId(busca_id_remover);

        console.log(`
            Tem certeza que deseja remover o dado acima?
            1 - SIM
            2 - NÃO
        `)

        removerDadosUsuario(busca_id_remover);

    } else if (opcao_menu == 4) {
        for (var id = 0; id < contador; id++) {
            console.log(`
                ID: ${id}
                Nome: ${usuarios[id]}
                E-mail: ${emails[id]}
                Idade: ${idades[id]}
            `);
        }
    } else if (opcao_menu == 5) {
        var busca_nome = prompt("Insira o nome ou sobrenome do usuário que deseja buscar(mínimo de 3 letras): ");

        verificaArrayUsuariosNome(busca_nome);
    } else {
        comeco = 2;
    }
}

function verificaArrayUsuariosNome(busca) {
    var achou = false;

    for (var id = 0; id < contador; id++) {
        if (busca == usuarios[id].substring(0, 3)) {
            console.log(`
                ID: ${id}
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
}

function alterarDadosUsuario(busca) {
    if (prompt() == 1) {
        var nome = prompt("Insira o nome: ");

        usuarios[nome].push(nome);
    } else if (prompt() == 2) {
        var email = prompt("Insira o email: ");
       
        emails.push(email);
    } else if (prompt() == 3) {
        var idade = prompt("Insira a idade: ");
        
        idades.push(idade);
    }
}

function removerDadosUsuario(busca) {
    if (prompt() == 1) {
        usuarios.pop()
        emails.pop()
        idades.pop()
    } else {

    } 
}

function verificaArrayUsuariosId(busca) {
    var achou = false;

    for (var id = 0; id < contador; id++) {
        if (busca == id) {
            console.log(`
                ID: ${id}
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
}