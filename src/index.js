import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar los métodos del objeto `analyzer`

/* 
Asegurar que el DOM esté completamente cargado antes de que se ejecuten los scripts
Declaraciones para seleccionar <textarea> basado en su name y <button> por su id
*/
document.addEventListener('DOMContentLoaded', () => {
    const areaTexto = document.querySelector('textarea[name="user-input"]');
    const btnResetear = document.getElementById('reset-button');
    const verCharacterCount = document.querySelector('[data-testid="character-count"]');

//Event listener para borrar el contenido del textarea al hacer click al botón
    btnResetear.addEventListener('click', () => {
        areaTexto.value = '';
        verCharacterCount.textContent = 'Caracteres: 0';
    });

 //Event listener para escuchar contenido ingresado en el textarea
    areaTexto.addEventListener('input', (event) => {
        //Para obtener el contenido actual del <textarea>
        const contenido = event.target.value;
        //Para imprimir el contenido actual en la consola
        console.log(`Texto ingresado: ${contenido}`);
        //Aquí invocar métodos del objeto analyzer!
        const characterCount = analyzer.getCharacterCount(contenido);
        verCharacterCount.textContent = `Caracteres: ${characterCount}`;
    });
});