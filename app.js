// add function called computerPlay(Return random value from array.)
const randomOptions = ["Rock","Paper","Scissors"]

function computerPlay(randomOptions){
    return (randomOptions[Math.floor(Math.random() *randomOptions.length)])
}

console.log(computerPlay(randomOptions));