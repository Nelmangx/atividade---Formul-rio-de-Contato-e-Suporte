let dados = document.getElementById("dado");
let valores = [];
let lista = document.getElementById("lista");
let resultado = document.getElementById("resul");

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (isNumero(dados.value) && !inLista(dados.value, valores)) {
        valores.push(Number(dados.value));
        let item = document.createElement("option");
        item.text = `Valor ${dados.value} está na lista.`;
        lista.appendChild(item);
        resultado.innerHTML = "";
    } else {
        window.alert("tente novamente");
    }
    dados.value = "";
    dados.focus();
}


const verificar = () => {
    if (valores.length == 0) {
        window.alert("VERIFIQUE OS DADOS!!")
    } else {
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        for(let pos in valores) {
            if (valores[pos] > maior) {
                maior = valores[pos];
            }
            if (valores[pos] < menor) {
                menor = valores[pos];
            }
        }
        resultado.innerHTML = "";
        resultado.innerHTML += `<p>Ao todo temos ${total} cadastrados.</p>`;
        resultado.innerHTML += `<p>O maior valor encontrado foi: ${maior}</p>`;
        resultado.innerHTML += `<p>O menor valor encontrado foi: ${menor}</p>`;
    }
}