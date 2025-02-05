const buttom = document.getElementById('enviar');
valorArchivo = 58.19;

buttom.addEventListener("click", () => {
   
    const consumo = parseFloat(document.getElementById('totalConsumo').value);

    
    if (consumo <= 0) {
        alert("Por favor, ingresa valores válidos.");
        return;
    }

    
    let valorConsumo = (consumo / 1000000) * 12;
    let porcentaje = (valorConsumo * 100) / valorArchivo;

   
    document.getElementById('resultado').innerHTML = `Porcentaje de energías renovables: <strong>${porcentaje.toFixed(8)}%</strong>`
})
