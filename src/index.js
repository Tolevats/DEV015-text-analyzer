import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar los métodos del objeto `analyzer`

document.addEventListener('DOMContentLoaded', () => {
    const areaTexto = document.querySelector('textarea[name="user-input"]');
    const btnResetear = document.getElementById('reset-button');

    btnResetear.addEventListener('click', () => {
        areaTexto.value = '';
    });
});