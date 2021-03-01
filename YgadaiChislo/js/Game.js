var number;
var attempts = 0;
        
number = Math.round(1000 * Math.random() * (9999 - 1000));
guessNumber();
        
function guessNumber(){
    attempts++;
            
    var result = parseInt(prompt("Введите число (-1 - закончить игру)"));
         
            
    if(result == number){
        alert("Вы угадали! Число попыток : " + attempts);
        location.reload();
    }

    else if(result == 0 || isNaN(result)){
        alert("Вы не ввели число");
        guessNumber();
    }

    else if(result == -1){
        alert("Спасибо за игру!")
    }
    else{

        if(result > number){
            alert("Ваше число больше загаданного");
        }
        else
            alert("Ваше число меньше загаданного");

        guessNumber();
    }
}