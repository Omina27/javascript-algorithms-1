///return the next number from the integer passed
const nextNum = (num) => num + 1
console.log(nextNum(48));


// aria of triangle
const triangle = (base, height) => (base * height) / 2
console.log(triangle(10, 10));


//convert age to days
const ageToDays = (age) => age * 365
console.log(ageToDays(19));


/// buggy code 
const cubes = (number) => Math.pow(number,3)
console.log(cubes(2));



//return the first element in array
const arr = [1,2,3,4]
const findFirstElement = arr[0]
console.log(findFirstElement);



//power calculator
const circuit = (a, b) => a * b
console.log(circuit(230, 10));


//hours in seconds
const hourInSeconds = (hour) => hour * 3600
console.log(hourInSeconds(7));


//maximum edge of triangle
const edgeTriangle = (side1, side2) => side1 + side2 -1
console.log(edgeTriangle(10,10))


//return division 
const division = (x, y) => x % y
console.log(division(13,5));


// find the perimeter of rectangle
const rectangle = (length, width) => (length + width) * 2
console.log(rectangle(20, 10));


//return something to me
const giveMe = (a) => `Something ${a}`
console.log(giveMe("Bob"))


//less than 100
const  lessthan = (a, b) =>  a + b < 100 ? true : false
console.log(lessthan(12, 12));


//basic variable assignment 
function student (word) {
    let add = "Edabit"
    let result = word + add

    return result
}
console.log(student("Dilbar "));


//exponentation
const expo = (number) => number ** 2
console.log(expo(7));


//basketball points
const points = (team1, team2) => (team1 * 2) + (team2 * 3)
console.log(points(1, 1));


//Polygon Angles
const polygon = (n) => (n - 2) * 180
console.log(polygon(3));


//less than or equal to zero
const equalZero = (num) => num <= 0 ? true : false
console.log(equalZero(-1));