function maiorValor(lista, elemento = 1)
{
    if(lista.length === 0) return elemento;
    const atual = lista[0];
    
    return atual > elemento ? maiorValor(lista.slice(1), atual) : maiorValor(lista.slice(1), elemento);
}

const lista = [2, 4, 22, 15, 0, 21, 15, 0, 27, 28, 6, 18, 29, 19, 7, 26, 28, 23, 1, 25, 21, 17, 5, 5, 17];
console.log('Maior valor: ', maiorValor(lista));