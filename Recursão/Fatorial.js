function fatorial(numero)
{
    if(numero === 1) return numero;

    return numero * fatorial(numero - 1) 
    //Primeira chamada vai ser 5 * (5-1)...
    // Ate que chega em um e esse segundo argumento é resolvido 
}

console.log('Fatorial: ', fatorial(5));