const form = document.querySelector('#forms');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    if (!peso){
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura){
        setResultado('Altura inválida', false);
        return;
    }
    const imc = getImc(peso, altura);
    const nivelImc = nivel(imc);
    const mensagem = `Seu IMC é ${imc}<br>(${nivelImc})`;
    setResultado(mensagem, true);
});

function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function nivel(imc){
    const texto = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if (imc >= 39.9) return texto[5];
    if (imc >= 34.9) return texto[4];
    if (imc >= 29.9) return texto[3];
    if (imc >= 24.9) return texto[2];
    if (imc >= 18.5) return texto[1];
    if (imc < 18.5) return texto[0];
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#result');
    resultado.innerHTML = '';
    const p = document.createElement('span');
    p.innerHTML = msg;
    
    resultado.appendChild(p);

}