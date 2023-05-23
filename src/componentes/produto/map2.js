const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.00}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
];

// Retorna um array apenas com preço

const paraObjetos = json => JSON.parse(json)
const apenasPrecos = produto => produto.preco 

const resultado2 = carrinho.map(paraObjetos)
const resultado = carrinho.map(paraObjetos).map(apenasPrecos)
console.log(resultado)
console.log(resultado2)