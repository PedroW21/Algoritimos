function contagemRegressivaComRecursividade(numero)
{
    console.log(numero)
    if(numero < 1) return numero

    return fatorial(numero - 1)
}

contagemRegressivaComRecursividade(5)