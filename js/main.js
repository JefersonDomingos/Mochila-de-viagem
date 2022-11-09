const formulario = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = [];

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

    lista.appendChild(novoItem);

    const itemAtual = {
        "nome" : nome,
        "quantidade" : quantidade
    };

    itens.push(itemAtual);
                        //chave , valor
    localStorage.setItem("item" , JSON.stringify(itens));
}


