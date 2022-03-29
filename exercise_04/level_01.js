
//1. 
function fullName(firstName, lastName) {
    let fullName = firstName + ' ' + lastName
    return fullName
}

console.log(fullName('Andrieli', 'Gonçalves'))
console.log('---------------')

// 2.

function addNumbers(a, b) {
    let sum = a + b

    return sum
}

console.log(addNumbers(1, 2))
console.log('---------------')

// 3.

function setAreaOfCircle(radius) {
    let area = Math.round((Math.PI) * radius * radius)

    return(area)
}

console.log(setAreaOfCircle(10))
console.log('---------------')

// 4.

const convertTemperature = (from='Celsius', to, x) => {

    let temperature = 0;
    
    switch (from) {

        case 'Celsius':

            if (to == 'Fahreint') {
                temperature = ((9 * x)/5) + 32
            }

            else if (to == 'Kelvin') {
                temperature = (x + 273)
            }

            break

        case 'Fahreint':

            if (to == 'Celsius') {
                temperature = ((x - 32) / 9) * 5
            }

            else if (to == 'Kelvin') {
                temperature = temperature = (((x - 32) * 5) / 9) + 273
            } 

            break

        case 'Kelvin':

            if (to == 'Celsius') {
                temperature = x - 273
            }

            else if (to == 'Fahreint') {
                temperature = temperature = (((x - 273) / 5) * 9) + 32
            } 
            break
    }

    return temperature
}

console.log(convertTemperature('Celsius', 'Kelvin', 27))
console.log('---------------')

// 5.

const setBMI = (weight, height) => {

    let bmi = Math.round(weight / (height * height))

    let status = '';

    if (bmi < 18.5) {
        status = 'Underweight'
    }
    
    else if (bmi >= 18.5 && bmi < 24.9) {
        status = 'Normal weight'
    }

    else if (bmi >= 25 && bmi < 29.9) {
        status = 'Overweight'
    }

    else if (bmi >= 30) {
        status = 'Obese'
    }

    return status
}

console.log(setBMI(80, 1.90))
