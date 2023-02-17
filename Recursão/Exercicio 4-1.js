function somaRecursiva(arr)
{
    if(arr.length === 1) return arr[0];

    return  arr[arr.length - 1] + somaRecursiva(arr.slice(0, arr.length - 1))

}

const lista = [5,4,3,2,1];

console.log(somaRecursiva(lista));