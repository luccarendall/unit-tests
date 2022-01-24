/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
// constante average é igual a um array que serve de parâmetro para a arrow function. Após isso a variável results é igualada a 0 para ser categorizada como um número.
const average = (array) => {
  let results = 0;

  // Se o tipo da variavel index for diferente de number retorne undefined
  for (let index = 0; index < array.length; index += 1) {
    if (typeof array[index] !== 'number') {
  return undefined;
  }
results += array[index];
}

// Se o tamanho do array for igual a 0, retorne undefined
if (array.length === 0) {
  return undefined;
}

// variável media é igual a variavel results divido pelo tamanho do array
let media = results / array.length;

// Arredondar o valor
return Math.round(media); 
};

module.exports = average;
