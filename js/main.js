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
        //se o nome for igual, o id também será
        itemAtual.id = existe.id;
        atulizaLista(itemAtual);
        
        //se o id for igual, então o que já está no local storage vai receber o valor que estou criando
        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual;
    
    }else{                  
        //se tiver algum elemento criado no itens[], o 'id' do itemAtual vai ser o 'id' do ultimo elemento + 1, senão o id será 0;                                  
        itemAtual.id = itens[itens.length -1] ? (itens[itens.length -1]).id + 1 : 0 ;
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
    novoItem.appendChild(criaBotaoDeletar(item.id));
    lista.appendChild(novoItem);

};

function atulizaLista(item){
    console.log("atualizando");
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade;
};

function criaBotaoDeletar (id){
    const botaoDeletar = document.createElement("button");
    botaoDeletar.innerText = "x";

    botaoDeletar.addEventListener('click', function () {
        deletarItem(this.parentNode,id);
    });
    
    return botaoDeletar;
};

function deletarItem (tag,id){
    tag.remove();
    
    //deletar o indice do array itens, que for igual ao id do item clicado.
    itens.splice(itens.findIndex(elemento => elemento.id === id),1);
    console.log(itens);

    localStorage.setItem("itens", JSON.stringify(itens));
};
