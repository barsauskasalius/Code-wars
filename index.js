function uncollapse(digits){
  
  const array = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  let newArr = ""
  for(let i in digits){
    let indexDigits = digits.includes(array[i])
      if(indexDigits){
        newArr += array[i] + " "
      }
  }
  return newArr.trim()
}

console.log(uncollapse("fivefourseven"))






















/*
//6KYU  Replace With Alphabet Position

function alphabetPosition(text) {
  let a =" abcdefghijklmnopqrstuvwxyz".split("")
  let textArr = text.toLowerCase().replace(/\s/g, '')
  let product = "";

  for (let i = 0; i < textArr.length; i++) {
    // console.log(text[i])
    for (let j = 0; j < a.length; j++) {
      if(textArr[i] === a[j]){
        product += j + " "
      }else {
        continue
      }
    }
  }
  return product.trim()
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."))
//output "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

  const farenheit = [23, 140, 212, 41]
function getCelcius(){
return farenheit.map(x => ((x - 32) * 5/9))
}
//console.log(getCelcius())


function checkForFalsey(arr) {
return arr.some(item => !item)  // check if items are falsy 
}
//console.log(checkForFalsey([11, NaN, [], 'Angels']))

const total = ["rabbit", "Football", "Cracking"]
function getTotal() {
  return total.reduce((total, value) => total + value.length, 0)
}
//console.log(getTotal())

function checkSquares(square){
return square.every(items => Math.sqrt(items) % 1 === 0) //checks if every item is square root true or false
}
//console.log(checkSquares([9, 16, 81]))

function getWords(arr, leng) {
  return  arr.filter(element => element.length >= leng)  //takes every element and compares to length
  };

//console.log(getWords(["Florida", "dog", "phone"], 5))

function getValues(arr) {
return arr.map(element => parseFloat(element))
}

//console.log(getValues(["23cm", "5.6cm", "1000cm"]))
const vowels = "aeiouy"
const vowels2 = ["a", "e", "i", "o", "u"]
function getVowelCounct(string){
//return string.split("").filter(x => vowels.includes(x.toLowerCase())).length  //includes checks if there is something in array
return string.split("").filter(letter => vowels2.includes(letter.toLowerCase())).length
}
//console.log(getVowelCounct("In West Philadelphia, born and raised"))


function capitalise(string) {
//return string.split(" ").map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(" ")// charat(0) first character
return string.split(" ").map(x => x.charAt(0).toUpperCase() + x.substr(1)).join(" ")
}

console.log(capitalise("the queens gambit"))


let str = "Hello world";
str.endsWith("world")   // Returns true
str.endsWith("World")   // Returns false



sums everything in array!
const scores = [3, 5, 6, 7]
const total = scores.reduce((totalScore, score) => totalScore + score)
console.log(total) //21

Cecks if true or false condition!
const scores = [34, 56, 24, 31]
const check = scores.every(result => result > 30)
console.log(check) //true


*/
/* 6kata

//6KYU  Replace With Alphabet Position

function alphabetPosition(text) {
  let a =" abcdefghijklmnopqrstuvwxyz".split("")
  let textArr = text.toLowerCase().replace(/\s/g, '')
  let product = "";

  for (let i = 0; i < textArr.length; i++) {
    // console.log(text[i])
    for (let j = 0; j < a.length; j++) {
      if(textArr[i] === a[j]){
        product += j + " "
      }else {
        continue
      }
    }
  }
  return product.trim()
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."))
//output "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"




*/


/*   7KATA

function vaporcode(string) {

  return string.toUpperCase().split(" ").join("").split("").join("  ")
}
console.log(vaporcode("Let's go to the movies"))

function highAndLow(numbers){
 let number = numbers.split(" ").map(x => Number(x))
 console.log(number)
  return  Math.max(...number) + " " + Math.min(...number)
}
 

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))// Find max and lowest number 


// to get data from APIS
// fetch("https://my-burger-api.herokuapp.com/burgers")
// .then((response) => response.json())
// .then((data) => console.log(data))

function getData() {
  fetch("https://my-burger-api.herokuapp.com/burgers")
 .then((response) => response.json())
 .then((data) => {
   console.log(data)
  const name = data[0].name
  console.log(name)
})
}

getData()



// to get data from APIS
// fetch("https://my-burger-api.herokuapp.com/burgers")
// .then((response) => response.json())
// .then((data) => console.log(data))

const write = document.querySelector(".write")
const buton = document.querySelector('.but')

function getData() {
  fetch("https://my-burger-api.herokuapp.com/burgers")
 .then((response) => response.json())
 .then((data) => {
   console.log(data)
  const randomBurgerId = Math.floor(Math.random() * data.length)
write.textContent = data[randomBurgerId].name
  console.log(randomBurgerId)
 })
}
buton.addEventListener("click", getData)


/// able post data to an api ( post request)

const data = {username: "example"}


  fetch("https://my-burger-api.herokuapp.com/burgers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log("Succes:", data)
  })
  .catch((error) => {
    console.error("error:", error)
  })
   
//PUT request allows you to edit object

const data = {username: "example"} // just take all data and can replace

fetch("https://my-burger-api.herokuapp.com/burgers/3", {  //change url to witch one you want to change
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log("Succes:", data)
})
.catch((error) => {
  console.error("error:", error)
})

//DELETE REQUEST

fetch("https://my-burger-api.herokuapp.com/burgers/29", {  //select in URL what u want to delete
  method: "DELETE"
})
.then(response => response.json())
.then(result => {
  console.log("Succes:", result)
})
.catch((error) => {
  console.error("error:", error)
})




*/