let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

let oneDollarIs = {
    "JPY": 144.69, // japan yen
    "GBP": 0.93, // british pound
}

let oneYenIs = {
    "USD": 0.0069, // us dollar
    "GBP": 0.0064, // british pound
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    //let valueInDollar = valueInEuro * 1.2;
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // retornamos el valor
    return valueInDollar;
}

// declaramos una funcion con el mismo nombre "fromDollarToYen"
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a Yen
    let valueInYen = valueInDollar * oneDollarIs.JPY;
    // retornamos el valor
    return Number(parseFloat(valueInYen).toFixed(3));
}

// declaramos una funcion con el mismo nombre "fromDollarToYen"
const fromYenToPound = function(valueInYen){
    // convertimos el valor a Yen
    let valueInPound = valueInYen * oneYenIs.GBP;
    // retornamos el valor
    return Number(parseFloat(valueInPound).toFixed(4));;
}

// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };