//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let nome;

function adicionarAmigo() {
    nome = document.getElementById("amigo").value;
    
    if (nome == "") {
        alert("Por favor, insira um nome.");
        return;
    } else {
        amigos.push(nome);
        document.getElementById("amigo").value = "";
        atualizarLista();
    }
}

function atualizarLista(){
    document.getElementById("listaAmigos").innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        document.getElementById("listaAmigos").appendChild(li);
    }
}

function sortearAmigo(){
    if (amigos.length != 0){
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let sorteado = amigos[indiceAleatorio];
        document.getElementById("resultado").innerHTML = sorteado;
    }
}

