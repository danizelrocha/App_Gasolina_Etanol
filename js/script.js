/*---------Nota Memoria de calculo-------------

  Multipleque o preço do alcool por 100.
  Divida pelo preço do litro da gasolina.
se o resultado for 70 ou menos,
isso indica que o etanol é mais vantajoso

  Nova média é de 72,5% para efeito de calculo,
veja a linha 27  */

const msgResultado = document.querySelector("h2");

function calcular() {
    const precoGasolina = parseFloat(document.getElementById("gasolina").value);
    const precoEtanol = parseFloat(document.getElementById("etanol").value);

    if (isNaN(precoGasolina)) {
        msgResultado.innerHTML = "Preço da Gasolina inválido"
        return;
    }

    if (isNaN(precoEtanol)) {
        msgResultado.innerHTML = "Preço do Etanol inválido"
        return;
    }

    if((precoEtanol / precoGasolina) >= 0.72)
        msgResultado.innerHTML = "Abasteça com Gasolina";
    else    
       msgResultado.innerHTML = "Abasteça com Etanol";
 
}