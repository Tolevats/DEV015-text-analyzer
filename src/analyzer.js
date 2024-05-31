//Declaración del objeto `analyzer`
const analyzer = {
  //Lo siguiente son métodos que toman un string `text` como argumento según cada función (clave + valor) 
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(' '); //1° Dividir string text en un array de substrings utilizando el espacio ' ' como delimitador
    let count = 0; //2° Inicializar variable contador

    for (let word of words) { //3° Iterar sobre cada elemento del array words
      word = word.trim(); //4° Eliminar los espacios en blanco de ambos extremos del string word

      if (word === '') continue; //5° Verificar si la palabra es un string vacía '' y saltar a la siguiente iteración del loop si la palabra es vacía

      //6° Verificar si es un número entero o decimal (con punto o coma)
      const number = parseFloat(word.replace(',', '.')); //Reemplazar las comas con puntos para manejar números decimales escritos con coma y convertir la palabra a un número de punto flotante
      if (!isNaN(number) && isFinite(number)) continue; //Verificar si la conversión es un número válido y saltar a la siguiente iteración del loop si la palabra es un número válido

      //7° Verificar si es un número con puntuación al final
      const lastChar = word[word.length - 1]; //Obtener el último carácter de la palabra
      if (!isNaN(parseFloat(word.slice(0, -1).replace(',', '.'))) && (lastChar === '.' || lastChar === ',')) continue; //Tomar la palabra sin el último carácter y reemplazar las comas con puntos. Convertir el nuevo string a un número de punto flotante. Verificar si esta conversión es un número válido y si el último carácter original es un punto o una coma. Finalmente saltar a la siguiente iteración del loop si la palabra es un número con puntuación al final

      count++; //Incrementa el contador en 1 para cada palabra que no ha sido excluida por las verificaciones anteriores
    }

    return count; //Devolver el valor final del contador (las palabras válidas)
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
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

    const parts = text.split(/\s/); //Expresión regular para dividir string text.
    const words = []; //Inicializar un array vacío que se llenará con palabras limpiadas (sin signos de puntuación y no numéricas)

    for (const part of parts) { //Iterar sobre cada elemento del array parts

      const cleanedPart = part.replace(/^[\W_]+|\W+_$/, ''); //Expresión regular para eliminar los signos de puntuación y guiones bajos al inicio (^[\W_]+) y al final ([\W_]+$) del string part

      // Verificar que la parte limpia no sea un string vacío ni sea un número
      if (cleanedPart.length > 0 && isNaN(cleanedPart)) { //Verificar que la longitud de cleanedPart sea mayor que 0
        words.push(cleanedPart); //Si ambas condiciones se cumplen, cleanedPart se agrega al array words
      }
    }

    if (words.length === 0) { //Verificar si el array words está vacío. Si está vacío, la función devuelve 0, ya que no hay palabras válidas para calcular la longitud promedio
      return 0;
    }
    //Calcular longitud total de las palabras y luego su promedio
    const totalLength = words.reduce((sum, word) => sum + word.length, 0); //Utilizar método reduce para sumar las longitudes de todas las palabras en el array words | reduce toma una función de callback que se aplica a cada elemento del array, acumulando un total (sum) | sum + word.length añade la longitud de cada palabra word al acumulador sum | 0 es el valor inicial de sum | El resultado es la longitud total de todas las palabras en words
    const averageLength = totalLength / words.length; //Calcular la longitud promedio dividiendo la totalLength por el número de palabras en words
    //Redondear la longitud promedio a dos decimales
    return parseFloat(averageLength.toFixed(2)); //Convertir averageLength a string, redondeado a dos decimales y luego convertir string de vuelta a un número de punto flotante
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    
    //v+ Usando `for`
    const parts = text.split(' ');
    let count = 0;

    for (let i = 0; i < parts.length; i++) { //Loop for que itera sobre cada elemento del array parts con la condición que continuará ejecutándose mientras i sea menor que la longitud del array parts. Luego incrementa i en 1 después de cada iteración del loop
      const part = parts[i].trim(); //Eliminar los espacios en blanco de ambos extremos del string parts[i]
      const cleanedPart = part.replace(/[.,!?:;]+$/, ''); //Expresión regular para eliminar signos de puntuación al final del string. + para "uno o más de los caracteres anteriores" y $ indica el final del string 
        
      //Reemplazar las comas por puntos si es un número decimal escrito con coma
      const validPart = cleanedPart.replace(',', '.'); //Reemplazar todas las comas en string cleanedPart con puntos

      if (validPart !== '' && !isNaN(parseFloat(validPart)) && isFinite(validPart)) { //Verificar si string no está vacía. Luego verifica si validPart puede ser convertido a un número de punto flotante válido. parseFloat(validPart) convierte string a un número de punto flotante. !isNaN(...) devuelve true si el resultado no es NaN (Not-a-Number). isFinite(validPart) verifica si el número es finito
        count++; //Si todas estas condiciones son verdaderas, incrementar el contador en 1
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
      const cleanedPart = part.replace(/[.,!?:;]+$/, ''); //Eliminar signos de puntuación al final
      const validPart = cleanedPart.replace(',', '.'); //Reemplazar la coma por un punto si es un número decimal
      
      if (validPart !== '' && !isNaN(parseFloat(validPart)) && isFinite(validPart)) { //Verificar que sea un número válido
        sum += parseFloat(validPart); //Forma abreviada de escribir sum = sum + num
      }
    }

    return sum;  
  },
};

export default analyzer;
