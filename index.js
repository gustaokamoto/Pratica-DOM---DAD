// Simulando um programa de estoque
// Declarando variáveis em escopo global
let marca = ""
let produto = ""
let codigo = ""
let preco = ""
let produtoF = {}

// Função para adicionar produtos nas listas
function addProduto(){
    //Pegando os valores e atribuindo as variáveis
    marca = document.getElementById('marca').value
    produto = document.getElementById('name').value
    codigo = document.getElementById('number').value
    preco = document.getElementById('preco').value

    //objeto criado e instânciado
    produtoF = {"marca": marca, "produto": produto, "codigo": codigo, "preco": preco}

    var respostaP = confirm("Deseja adicionar produto?") //Botão de confirmar

    if (respostaP == true){  //caso esteja confirmado irá funcionar
        // Verificação de marca e separação
    if(produtoF.marca == "Seara"){ 
        //Cria um novo elemento (li) com a classe igual ao código do produto --> dos produtos da marca Seara
        let elemento = document.createElement('li')
        elemento.className = `${produtoF.codigo}`
        //cria um novo elemento no HTML
        document.querySelector('#lista-seara').appendChild(elemento).innerHTML = `(${produtoF.codigo}) - Marca: ${produtoF.marca} - ${produtoF.produto} R$ ${produtoF.preco}`
    
    } else if (produtoF.marca == "Swift"){
        //Cria um novo elemento (li) com a classe igual ao código do produto --> dos produtos da marca Swift
        let elemento = document.createElement('li')
        elemento.className = `${produtoF.codigo}`
        //cria um novo elemento no HTML
        document.querySelector('#lista-swift').appendChild(elemento).innerHTML = `(${produtoF.codigo}) - Marca: ${produtoF.marca} - ${produtoF.produto} R$ ${produtoF.preco}`
    } else {
        //Cria um novo elemento (li) com a classe igual ao código do produto --> dos produtos da marca Friboi
        let elemento = document.createElement('li')
        elemento.className = `${produtoF.codigo}`
        //cria um novo elemento no HTML
        document.querySelector('#lista-friboi').appendChild(elemento).innerHTML = `(${produtoF.codigo}) - Marca: ${produtoF.marca} - ${produtoF.produto} R$ ${produtoF.preco}`
    }
    }
 
}

//Função para remover as informações do produto
function removeProduto(){
    //Captura a lista de li's existentes
    var li = document.querySelectorAll('li')
    //captura o código do produto que o usuário deseja apagar
    var resposta = document.querySelector('#codigo_remover').value
    var respostaD = confirm("Deseja adicionar produto?") //Botão de confirmar

    if (respostaD == true){ //caso esteja confirmado irá funcionar
        //Loop para verificar todos os li's com o código do produto que deseja apagar
        for (i = 0; i < li.length; i++){
            if (li[i].className == resposta){
                //Substitui o conteudo HTML
                li[i].innerHTML = ""
            }
    }
    }

}