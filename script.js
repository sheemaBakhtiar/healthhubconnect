// function show(){
//     document.querySelector('.hamburger').classList.toggle('open')
//     document.querySelector('.navigation').classList.toggle('active')
// }

let guess = prompt("Guess the number= ");
let correctGuess = 10;

while(correctGuess!= guess){
    guess = prompt("you have entered the wrong guess,try again");
}
console.log("congrats");