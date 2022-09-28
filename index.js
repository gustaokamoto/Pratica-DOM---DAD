// Simulando um programa de estoque
let controle = 0
let marca = ""
let produto = ""
let codigo = ""
let preco = ""
let produtoF = {}
let produtos = {}

function addProduto(){
    marca = document.getElementById('marca').value
    produto = document.getElementById('name').value
    codigo = document.getElementById('number').value
    preco = document.getElementById('preco').value

    produtoF = {"marca": marca, "produto": produto, "codigo": codigo, "preco": preco}
 

    if(produtoF.marca == "Seara"){
        let elemento = document.createElement('li')
        elemento.className = `${produtoF.codigo}`
        document.querySelector('#lista-seara').appendChild(elemento).innerHTML = `(${produtoF.codigo}) - Marca: ${produtoF.marca} - ${produtoF.produto} R$ ${produtoF.preco}`
    
    } else if (produtoF.marca == "Swift"){
        let elemento = document.createElement('li')
        elemento.className = `${produtoF.codigo}`
        document.querySelector('#lista-swift').appendChild(elemento).innerHTML = `(${produtoF.codigo}) - Marca: ${produtoF.marca} - ${produtoF.produto} R$ ${produtoF.preco}`
    } else {
        let elemento = document.createElement('li')
        elemento.className = `${produtoF.codigo}`
        document.querySelector('#lista-friboi').appendChild(elemento).innerHTML = `(${produtoF.codigo}) - Marca: ${produtoF.marca} - ${produtoF.produto} R$ ${produtoF.preco}`
    }
    
}


function removeProduto(){
    var li = document.querySelectorAll('li')
    var resposta = document.querySelector('#codigo_remover').value

    for (i = 0; i < li.length; i++){
        if (li[i].className == resposta){
            li[i].innerHTML = ""
        }
    }
}