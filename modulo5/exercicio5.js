 /*TEMPORIZADOR DE DATA*/
 const calcularTempoRestante = (dataFutura) => {
    const dataAtual = new Date().getTime();
    const tempoRestante = dataFutura - dataAtual;
    
    const milsegDeMinuto = 60*1000; //1min = 60segundos (*1000 pois o js trabalha com milissegundos)
   //Então, se 1segundo=1000milisegundo e 1 minuto tem 60segundos: 60seg(1min)*1000milissegundos
    const milisegDeHora = 60*milsegDeMinuto;
    const milsegDeDia = 24*milisegDeHora; //ou seja, 1 dia tem 86.400.000 milisegundos

    const dias = Math.floor (tempoRestante / milsegDeDia); //math.floor arrendonda pra baixo
    // contabiliza a diferença de dias entre as datas
    const horas =  Math.floor ((tempoRestante % milsegDeDia) / milisegDeHora);
    const minutos =  Math.floor ((tempoRestante % milisegDeHora) / milsegDeMinuto);
    const segundos =  Math.floor ((tempoRestante % milsegDeMinuto) / 1000);

    return {
        dias,
        horas,
        minutos,
        segundos
    }
 };


const atualizarTemporizador = () => {
    const dataFutura = new Date ('2025-04-26T21:36:03').getTime();
    const tempoResta = calcularTempoRestante(dataFutura)

    document.getElementById ('dias').innerText = `Dias ${tempoResta.dias}`;
    document.getElementById ('horas').innerText = `Horas ${tempoResta.horas}`;
    document.getElementById ('minutos').innerText = `Ninutos ${tempoResta.minutos}`;
    document.getElementById ('segundos').innerText = `Segundos ${tempoResta.segundos}`;
    
}   

const intervalo = setInterval (atualizarTemporizador, 1000);