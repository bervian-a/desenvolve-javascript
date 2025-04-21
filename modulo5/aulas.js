function chamar (secsAtraso) {
    console.log (`Atrasou ${secsAtraso} segundos (funçaõ 1)`)
};

function chamaAtrasado (funcaoDeAtraso, quantidadeAtraso) { //timeout serve para atrasar a chamada de uma função//
    setTimeout (() => funcaoDeAtraso (quantidadeAtraso), quantidadeAtraso *1000)  // DATA TRABALHA em milissegundos, por isso multiplica por 1.000//
};

chamaAtrasado (chamar, 2)

function chamarIntervalo (funcaoIntervalada, intervalo) {
    setInterval(() => funcaoIntervalada(intervalo), intervalo*1000);
};

chamarIntervalo (chamar, 5)