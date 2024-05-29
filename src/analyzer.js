/* eslint-disable no-unused-vars */

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
    return characterCount; 
    // v2 Más simple: 
    let characterCount = text.length; 
    return characterCount*/
    // v3 Muy simple:
    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    //Usando `for` con array de signos de puntuación para excluirlos del conteo de caracteres
    let count = 0;
    const punctuation = ['.', ',', ':', ';', '‘', '’', '“', '”', '«', '»','¡', '!', '¿', '?', '-', '_', '[', ']', '{', '}', '(', ')'];

    for (let i = 0; i < text.length; i++) {
      if (text[i] !== ' ' && !punctuation.includes(text[i])) {
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
    //Usando `for`
    /* v1:     
    const parts = text.split(' ');
    let count = 0;
    for (let i = 0; i < parts.length; i++) {
      if (!isNaN(Number(parts[i])) && parts[i].trim() !== '') {
        count++;
      }
    }
    return count;  */
    //v2:
    const parts = text.split(' ');
    let count = 0;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i].trim();

      if (part !== '' && !isNaN(Number(part))) {
        count++;
      }
    }

    return count;
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    
  },
};

export default analyzer;
