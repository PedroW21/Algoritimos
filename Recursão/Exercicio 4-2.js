function countElementsOnList(lista)
{
    if(lista === 0) return 0;

    return 1 + countElementsOnList(lista.length - 1)
}

console.log(countElementsOnList([1,2,3,4]))