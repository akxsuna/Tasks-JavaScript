function getTimeFromMinutes(minutes) {
    if (typeof minutes !== "number" || minutes % 1 !== 0 || minutes < 0) { 
        return "Ошибка, проверьте данные";
    } 
    
    // if (minutes === 0) { 
    //     return "Это 0 часов и 0 минут"
    // } 
    
    // if (minutes >= 60 && minutes < 120) { 
    //   return `Это ${Math.floor(minutes/60)} час и ${Math.ceil(minutes % 60)} минут`
    // } 
    
    // if (minutes >= 120 && minutes < 300) { 
    // return `Это ${Math.floor(minutes/60)} часа и ${Math.ceil(minutes % 60)} минут`
    // }
    
    //  return `Это ${Math.floor(minutes/60)} часов и ${Math.ceil(minutes % 60)} минут`
    let hoursStr = '';

    switch (Math.floor(minutes/60)) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }


    return `Это ${Math.floor(minutes/60)} ${hoursStr} и ${Math.ceil(minutes % 60)} минут`
} 
   

/* 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

Пример:

getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

getTimeFromMinutes(-150) => "Ошибка, проверьте данные" */