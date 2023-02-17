function encontrarMenorElemento(arr)
{
    let menor = arr[0];
    let menorIndice = 0;

    for(i = 0; i < arr.length; i++)
    {
        if(arr[i] < menor)
        {
            menor = arr[i];
            menorIndice = i;
        }
    }

    return menorIndice;
}

function selectionSort(arr)
{
    let novoArr = [];

    for (let i = 0; i < arr.length; i++) {
        let menorElemento = encontrarMenorElemento(arr);

        novoArr.push(arr.splice(menorElemento, 1));
    }

    return novoArr;
}

const lista = [89, 92, 33, 64, 94, 14, 20, 24, 69, 61, 81, 43, 8, 32, 88, 74, 92, 92, 31, 79, 26, 44, 21, 61, 18];



//console.log('Menor elemento: ', lista[encontrarMenorElemento(lista)]);
console.log(selectionSort(lista));