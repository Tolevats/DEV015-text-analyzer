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
    // Divide el texto en palabras usando cualquier carácter no alfabético como delimitador
    /* v1
    const words = text.match(/\b\w+\b/g);

    if (!words) {
      return 0;
    }

    // Calcula la longitud total de las palabras
    const totalLength = words.reduce((sum, word) => sum + word.length, 0);

    // Calcula la longitud media
    const averageLength = totalLength / words.length;

    // Redondea a dos decimales
    return Math.round(averageLength * 100) / 100; */
    // Dividir el texto en partes basadas en espacios
    const parts = text.split(/\s/);
    const words = [];

    for (const part of parts) {
      // Limpiar cualquier signo de puntuación al principio o al final de cada palabra
      const cleanedPart = part.replace(/^[\W_]+|\W+_$/, '');
      if (cleanedPart.length > 0) {
        words.push(cleanedPart);
      }
    }

    if (words.length === 0) {
      return 0;
    }

    // Calcula la longitud total de las palabras
    const totalLength = words.reduce((sum, word) => sum + word.length, 0);

    // Calcula la longitud media
    const averageLength = totalLength / words.length;

    // Redondea a dos decimales usando toFixed
    return parseFloat(averageLength.toFixed(2));
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
    return count;  
    //v2:
    const parts = text.split(' ');
    let count = 0;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i].trim();

      if (part !== '' && !isNaN(Number(part))) {
        count++;
      }
    }
    return count; */ 
    //v3
    const parts = text.split(' ');
    let count = 0;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i].trim();
      // Remover signos de puntuación al final del número
      const cleanedPart = part.replace(/[.,!?:;]+$/, '');
        
      // Verificar si la parte limpiada es un número válido
      if (cleanedPart !== '' && !isNaN(parseFloat(cleanedPart)) && isFinite(cleanedPart)) {
        count++;
      }
    }

    return count;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const parts = text.split(' ');
    let sum = 0;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i].trim();
      // Remover signos de puntuación permitidos al final del número
      const cleanedPart = part.replace(/[.,!?:;]+$/, '');
        
      // Verificar si la parte limpiada es un número válido y no tiene letras
      const num = parseFloat(cleanedPart);
      if (!isNaN(num) && isFinite(num) && /^[+-]?\d*\.?\d*$/.test(cleanedPart)) {
        sum += num;
      }
    }

    return sum;    
  },
};

export default analyzer;
