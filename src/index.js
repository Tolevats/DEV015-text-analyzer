import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar los métodos del objeto `analyzer`

/* 
Asegurar que el DOM esté completamente cargado antes de que se ejecuten los scripts.
Declaraciones para seleccionar <textarea> por su atributo con valor, <button> por su id y métricas por su atributo con valor.
*/
document.addEventListener('DOMContentLoaded', () => {
  const areaTexto = document.querySelector('textarea[name="user-input"]');
  const btnResetear = document.getElementById('reset-button');
  const cntdrCaracteres = document.querySelector('[data-testid="character-count"]');
  const cntdrCaracteresSin = document.querySelector('[data-testid="character-no-spaces-count"]');
  const cntdrPalabras = document.querySelector('[data-testid="word-count"]');
  const cntdrNumeros = document.querySelector('[data-testid="number-count"]');
  const cntdrSumaNum = document.querySelector('[data-testid="number-sum"]');
  const cntdrLongPal = document.querySelector('[data-testid="word-length-average"]');

  //Event listener para borrar el contenido del textarea al hacer click al botón
  btnResetear.addEventListener('click', () => {
    areaTexto.value = '';
    cntdrCaracteres.textContent = 'Caracteres: 0';
    cntdrCaracteresSin.textContent = 'Caracteres Sin Espacio: 0';
    cntdrPalabras.textContent = 'Palabras: 0';
    cntdrNumeros.textContent = 'Números: 0';
    cntdrSumaNum.textContent = 'Suma de Números: 0';
    cntdrLongPal.textContent = 'Promedio de Longitud: 0';
  });

  //Event listener para escuchar contenido ingresado en el textarea
  areaTexto.addEventListener('input', (event) => {
    //Para obtener el contenido actual del <textarea>
    const contenido = event.target.value;

    //Aquí invocar métodos del objeto analyzer!
    const verCntdrCaracteres = analyzer.getCharacterCount(contenido);
    cntdrCaracteres.textContent = `Caracteres: ${verCntdrCaracteres}`;

    const verCntdrCaracteresSin = analyzer.getCharacterCountExcludingSpaces(contenido);
    cntdrCaracteresSin.textContent = `Caracteres Sin Espacio: ${verCntdrCaracteresSin}`;

    const verCntdrPalabras = analyzer.getWordCount(contenido);
    cntdrPalabras.textContent = `Palabras: ${verCntdrPalabras}`;

    const verCntdrNumeros = analyzer.getNumberCount(contenido);
    cntdrNumeros.textContent = `Números: ${verCntdrNumeros}`;

    const verCntdrSumaNum = analyzer.getNumberSum(contenido);
    cntdrSumaNum.textContent = `Suma de Números: ${verCntdrSumaNum}`;

    const verCntdrLongPal = analyzer.getAverageWordLength(contenido);
    cntdrLongPal.textContent = `Promedio de Longitud: ${verCntdrLongPal}`;
  });
});