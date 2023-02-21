function quickSort(arr)
{
    if(arr.length < 2) return arr;

    let pivo = arr[0];
    // maiores e menores ordenam os arrays "orelhas"
    let menores = arr.slice(1).filter(e => e <= pivo);
    let maiores = arr.slice(1).filter(e => e >= pivo);

    return quickSort(menores).concat([pivo], quickSort(maiores))
}

console.log(quickSort([2, 21, 13, 24, 8, 1, 0, 16, 15, 4, 28, 29, 16, 27, 30, 12, 30, 25, 25, 9, 30, 3, 13, 18, 20]))

/*

Em suma, a recursividade se da nos dois arrays gerados, que vai ate ao momento que o array chega ao caso base
(onde estara ordenado) e vai concatenando com o pivo na pilha de chamada, gerando assim um array ordenado no final

*/