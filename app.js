var month = prompt('enter month').toLowerCase()
switch (month){
    case 'март':
    case 'апрель':
    case 'май':
        console.log('весна')
        break
    case 'июнь':
    case 'июль':
    case 'август':
        console.log('лето')
        break
    case 'сентябрь':
    case 'октябрь':
    case 'ноябрь':
        console.log('осень')
        break
    case 'декабрь':
    case 'январь':
    case 'февраль':
        console.log('зима')
        break

}


// второе задание
var array = [1, 3, 9, 12, 6, 14, 10, 2, 7, 11, 4, 8, 13, 5 ,6]
console.log(array)
console.log(array[7])



// третье задание
var num1 = Number (prompt('num1'))
var num2 = Number (prompt('num2'))
var sing = prompt('sing')
switch (num1 && num2 && sing){
    case '+':
        console.log(num1 + num2)
        break
    case '-':
        console.log(num1 - num2)
        break
    case '/':
        console.log(num1 / num2)
        break
    case '*':
        console.log(num1 * num2)
        break
}



//DZ1 второе задание
var value1 = prompt('напишите первое слово ')
var value2 = prompt('напишите второе слово')
if (value1 > value2){
    alert('первое слово больше, чем второе слово ')
}else if (value1 < value2){
    alert('второе слово больше, чем первое слово')
}else{
    alert('равно')
}