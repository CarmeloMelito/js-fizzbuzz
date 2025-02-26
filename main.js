//Creazione Ciclo For
for (let n = 1; n < 101; n++) {
    //CONDIZIONI

    //FIZZBUZZ

    if (n % 15 == 0)
        console.log("FizzBuzzz");
    //FIZZ

    else if (n % 3 == 0)
        console.log("Fizz");
    //BUZZ
    else if (n % 5 == 0)
        console.log("Buzz");

    else console.log(n);
}

//console.log(n)