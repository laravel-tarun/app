/*
|--------------------------------------------------------------------------
| JavaScript Basics
|--------------------------------------------------------------------------
*/
document.getElementById("hello_world").innerHTML = "Hello World !!!!"

//alert("Hello World!!!!")

console.log("Hello World!!!!!")

let x = 300
var y = 500

const z = x + y

document.getElementById("data").innerHTML = z


/*
|----------------------------------------------------------------------------
| JavaScript Functions 
|----------------------------------------------------------------------------
*/
 
//Simple function
function one(){
    return 3+5
}

document.getElementById("one").innerHTML = one()

// Function returning the sum of two numbers
function sum(x,y){
    return x+y
}

const _sum = sum(34,67)

document.getElementById("sum").innerHTML = "The sum is "+_sum


//Function to convert Fahrenheit to Celsius
function toCelsius(fahrenheit){
    return (5/9) * (fahrenheit - 32);
}

document.getElementById("temprature").innerHTML = "Converted temprature is "+toCelsius(50) + " Celsius"

// Function with a local variable "let"
function localVariable(){
    let x = 1340
    return x*342
}

document.getElementById("localVarible").innerHTML = localVariable()

/*
|----------------------------------------------------------------------------
| JavaScript Objects 
|----------------------------------------------------------------------------
*/


// Simple Object

const data = {
    name: "Tarun Chauhan",
    job: "Full-stack Laravel Developer",
    age: 32
}

document.getElementById("name").innerHTML = data.name
document.getElementById("job").innerHTML = data.job
document.getElementById("age").innerHTML = data.age


// Object with a method

const car = {
    company: "Suzuki",
    model: "Dzire",
    YOM: "2019",
    price: "7,80,000",
    details : function(){
        return "Car : "+this.company+" "+this.model+" Manufacture Year : "+this.YOM+" Price : "+this.price+"."
    }
}

document.getElementById("carDetails").innerHTML = car.details()



/*
|----------------------------------------------------------------------------
| JavaScript Events 
|----------------------------------------------------------------------------
*/

function showTime(){
    document.getElementById("showTime").innerHTML = Date()
}

