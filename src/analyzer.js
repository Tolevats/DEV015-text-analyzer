//Declaración del objeto `analyzer`
const analyzer = {
  //Lo siguiente son métodos que toman un string `text` como parámetro según cada función (clave + valor) 
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //El `split` divide string en palabras usando el espacio como delimitador, `for` recorre palabra. Si la palabra no está vacía se incrementa el contador count 
    const words = text.split(' ');
    let count = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i].trim() !== '') {
        count++;
      }
    }
    return count;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    /* // v1 Probando con variables:  
    let characterCount = 0;
    characterCount = text.length; 
    // v2 Más simple: 
    let characterCount = text.length; */
    // v3 Muy simple:
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    //Usando bucle `for`
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== ' ') {
        count++;
      }
    }
    return count;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.

  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    
  },
};

export default analyzer;
