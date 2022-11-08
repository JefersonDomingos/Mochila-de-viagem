const formulario = document.getElementById("novoItem");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const inputNome = evento.target.elements['nome'];
    const inputQuantidade = evento.target.elements['quantidade'];
    
    if(inputQuantidade.value > 0 && inputNome.value !== ""){
        criaElemento (inputNome.value, inputQuantidade.value);
        inputNome.value = ""; 
        inputQuantidade.value = "";
    }

});

function criaElemento (nome, quantidade){
    //<li class="item"><strong>1</strong></li>
    const novoItem = document.createElement('li');
    novoItem.classList.add("item");

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;

    const lista = document.getElementById("lista");
    lista.appendChild(novoItem);

    localStorage.setItem("nome",nome);
    localStorage.setItem("quantidade",quantidade);
}


