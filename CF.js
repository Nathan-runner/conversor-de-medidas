 //Esta pasta converte graus Celsius em Fahrenheit e vice-versa//

 const unidadeNumero = process.argv[2]

// Função que executa a conversão


    function convertorCF() {
    if (unidadeNumero.endsWith("C")) {
        // Extrai só o número, ignorando a letra
        let celsius = parseFloat(unidadeNumero);
        let fahrenheit = (celsius * 9/5) + 32;
        console.log(`${celsius} graus Celsius é igual a ${fahrenheit} graus Fahrenheit`);
    } 
    else if (unidadeNumero.endsWith("F")) {
        let fahrenheit = parseFloat(unidadeNumero);
        let celsius = (fahrenheit - 32) * 5/9;
        console.log(`${fahrenheit} graus Fahrenheit é igual a ${celsius} graus Celsius`);
    } 
    else {
        console.log("Formato inválido! Use algo como 200C ou 86F");
    }
    }   

// Função que executa a conversão de km para milhas e vice-versa
    function convertorKmMl(){
        //se a unidade termina com km exevutar a conversão de km para milhas
        if (unidadeNumero.endsWith("km")) {     
            let km = parseFloat(unidadeNumero);
            let milhas = km / 1.6093;
            console.log(`${km} quilômetros é igual a ${milhas} milhas`);
        }   //se a unidade termina com milhas executar a conversão de milhas para km
            else if (unidadeNumero.endsWith("milhas")) {
            let milhas = parseFloat(unidadeNumero);
            let km = milhas * 1.6093;
            console.log(`${milhas} milhas é igual a ${km} quilômetros`);
        }
            //se a unidade não termina com km ou milhas, exibir mensagem de erro
            else {
            console.log("Formato inválido! Use algo como 200km ou 86milhas");
            }
    }
    // Chama a função de conversão apropriada com base na unidade fornecida//
    //se a unidade termina com C ou F, chama a função convertorCF
    if (unidadeNumero.endsWith("C") || unidadeNumero.endsWith("F")) {
        convertorCF();
    }
    //se a unidade termina com km ou milhas, chama a função convertorKmMl
    else if(unidadeNumero.endsWith("km") || unidadeNumero.endsWith("milhas")) {
        convertorKmMl();
    }
    //se a unidade não termina com C, F, km ou milhas, exibir mensagem de erro
    else {
        console.log("Formato inválido! Use algo como 200C, 86F, 200km ou 86milhas");
    }
