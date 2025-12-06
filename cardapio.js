async function buscarEndpoint() {
    await fetch('https://confeitaria-api-fg5n.onrender.com/cardapio', {
        'headers': {"Accept": "application/json"}
    })
    .then(json => {
        retorno = json.json();
    })

    return retorno;
}

async function carregarItensCardapio(){
    const itens = await buscarEndpoint();

    document.getElementById("itens-cardapio").innerHTML = '';
    for(let i = 0; i < itens.length; i++){
        document.getElementById("itens-cardapio").innerHTML += `<div>
                <img src="${itens[i].foto}" style="height: 100%!important;" alt="${itens[i].nome}">
                <h3>${itens[i].nome} - R$${((itens[i].preco).toString()).replace('.', ',')}</h3>
            </div>`;
    }

    console.log();
}


carregarItensCardapio();
