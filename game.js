function getRandomNumber(max){
    return Math.floor(Math.random() * max);
}

const secretNumber = getRandomNumber(100);
console.log('Компьютер загадал число ' + secretNumber);

function searchNumber(){
    let max = 100;
    let min  = 1;

    while(min < max){

        let currentNumber = Math.floor((min + max)/2);

        console.log(`Компьютер 2: Пробую число ${currentNumber}.`);

        if(currentNumber == secretNumber){
            console.log(`Компьютер 1: Угадал! `);

            break;
        }else if(currentNumber < secretNumber){
            console.log(`Компьютер 1: Больше.`);
            min = currentNumber;
        }else if(currentNumber > secretNumber){
            console.log(`Компьютер 1: Меньше.`);
            max = currentNumber;

        }
    } 
}
searchNumber();