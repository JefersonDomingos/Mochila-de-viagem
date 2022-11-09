const formulario = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];
//persistência do item criado
itens.forEach((elemento) => {
    criaElemento(elemento);
});

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    const itemAtual = {
        "nome" : nome.value,
        "quantidade" : quantidade.value
    };

    criaElemento (itemAtual);

    itens.push(itemAtual);
                         //chave , valor
    localStorage.setItem("itens" , JSON.stringify(itens));
    
    nome.value = "";
    quantidade.value = "";
    
});

function criaElemento (itemAtual){
    //<li class="item"><strong>1</strong></li>
    const novoItem = document.createElement('li');
    novoItem.classList.add("item");

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = itemAtual.quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += itemAtual.nome;

    lista.appendChild(novoItem);
};



