let lines = 5;
let result = '';

for (let i = 1; i <= lines + 1; i++) {
     for (let j = 0; j < i; j++) {
       if (j === 0) {
         result += " ".repeat(lines + 1 - i);
         result += "*"
       } else {
        result += "**"
       }   
    }
    result += '\n'
} 

console.log(result)

// Код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

//      *
//     ***
//    *****
//   *******
//  *********
// ***********


// второй вариант: 
const range = 5;
let output = '';

for (let i = 0; i <= range; i++) {
    for (let j = 0; j < range - i; j++) {
        output += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        output += "*";
    }
    output += "\n";
}

console.log(output)