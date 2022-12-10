const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

//mostrando itens existentes
itens.forEach( (elemento) => {    
    criaElemento(elemento);
} );

//eventos
form.addEventListener("submit", (evento) => {  
    evento.preventDefault();

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    const existe = itens.find(elemento => elemento.nome === nome.value);

    const itemAtual = {
    "nome": nome.value,
    "quantidade": quantidade.value
    };

    if(existe){
        itemAtual.id = existe.id;
        console.log("Já existe e o id é: " + existe.id);
        atulizaLista(itemAtual);
    
    }else{
        itemAtual.id = itens.length;
        criaElemento(itemAtual);
        itens.push(itemAtual);
    }

    localStorage.setItem("itens", JSON.stringify(itens));

    nome.value = "";
    quantidade.value = "";
});

//funções
function criaElemento(item) {  
    const novoItem = document.createElement('li');
    novoItem.classList.add("item");

    const numeroItem = document.createElement('strong');
    numeroItem.dataset.id = item.id;
    numeroItem.innerHTML = item.quantidade;
    novoItem.appendChild(numeroItem);
    
    novoItem.innerHTML += item.nome;
    lista.appendChild(novoItem);
};

function atulizaLista(item){
    console.log("atualizando")
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade;
}
