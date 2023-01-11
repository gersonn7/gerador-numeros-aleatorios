const button = document.getElementById('gerador');

button.addEventListener('click',function(){
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    let resultado = Math.floor(Math.random() * (max - min + 1)) + min;

    if(isNaN(resultado)){
        resultado = 'valor inválido'
    }
    document.querySelector('#result > span').textContent = resultado;
});