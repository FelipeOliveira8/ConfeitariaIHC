let itensCardapio = [    
    {
        nome : "Bolo de chocolate",
        preco : "39,90",
        img: "img/bolo_de_chocolate.jpg"
    },
    {
        nome: "Bolo de morango",
        preco: "45,90",        
        img: "img/bolo_de_morango.jpg"
    },
    {
        nome: "Bolo de cenoura",
        preco: "19,90",    
        img: "img/bolo_de_cenoura.jpg"
    }
]

function carregarItensCardapio(itens){
    document.getElementById("itens-cardapio").innerHTML = '';
    for(let i = 0; i < itens.length; i++){
        document.getElementById("itens-cardapio").innerHTML += `<div>
                <img src="${itens[i].img}" alt="${itens[i].nome}">
                <h3>${itens[i].nome} - R$${itens[i].preco}</h3>
            </div>`;
    }
}

carregarItensCardapio(itensCardapio);
