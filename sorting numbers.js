function findMaxNumber(firstNumber, secondNumber, thirdNumber, fourthNumber) {
    if (typeof firstNumber !== "number" || typeof secondNumber !== "number" || typeof thirdNumber !== "number" || typeof fourthNumber !== "number") { 
      return 0;
    } 
    
    if (arguments.length < 4) { 
      return 0; 
    } 
    
    // return Math.max(firstNumber, secondNumber, thirdNumber, fourthNumber);
    
    let arrayOfNumbers = [];
    
    for (let i = 0; i <= arguments.length - 1; i++) { 
      arrayOfNumbers.push(arguments[i]);
    }
    
    arrayOfNumbers.sort((a, b) => a - b);
    return arrayOfNumbers[arrayOfNumbers.length - 1];
  } 
  
  
  findMaxNumber(1, 5, 2, 3);
  
  /* Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.
  
    Пример:
    
    findMaxNumber(1, 5, 6.6, 11); =>  11
    
    findMaxNumber(1, 5, '6', '10');  =>  0
    
    У этой задачи есть очень много вариантов решения, в том числе и встроенное в JS. Подходит любое :) */