//Informações pessoais:
let nome = document.getElementById("nome");
let email = document.getElementById("email");
let telefone = document.getElementById("telefone");

//Assunto: 
let desProblema = document.getElementById("desProblema");
let arquivo = document.getElementById("arquivo");

//Criação da array.
const dados = [];
const usuario = {};

//funções.
//verificação dos dados e adição dos dados na array.
const verificar = () => {
    
    let n = nome.value;
    let e = email.value;
    let t = telefone.value;
    let dP = desProblema.value;
    if (n == "" || e == "" || t == "" || dP == "") {
        window.alert("VERIFIQUE OS DADOS");
    } else {
        usuario.nome = n;
        usuario.email = e;
        usuario.telefone = t;
        usuario.problema = dP;
        dados.push(n, e, t, dP);
        console.log(dados, usuario);
        return enviar();
    }
    dados.length = 0
    
}

//mostrando os dados preenchidos.
const enviar = () => {
    for(let pos in usuario) {
    let lista = document.createElement("li");
    lista.textContent = `${pos}: ${usuario[pos]}`;
    document.getElementById("lista-dados").appendChild(lista);
    usuario.length = 0;
    }

    for(let l = 0; l < dados.length; l++) {
    let lista = document.createElement("li");
    lista.textContent = `${dados[l]}`;
    document.getElementById("lista-dados").appendChild(lista);
    }
    dados.length = 0;
}
