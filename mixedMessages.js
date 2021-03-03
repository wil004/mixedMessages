let randomMessage = [];

function addYourOwnMessage (array, yourMessage) {
array.push(yourMessage)
}

addYourOwnMessage(randomMessage, 'Hard work will pay off one day')
addYourOwnMessage(randomMessage, 'Motivation is the key of succes')
addYourOwnMessage(randomMessage, 'Creativity is the tool to put your motivation into work')
addYourOwnMessage(randomMessage, 'Another random message by wil004')


function randomMessageCreator (array)  {
let random = Math.floor(Math.random() * array.length)
let printRandomMessage = array[random]
return printRandomMessage
}

let printRandom = randomMessageCreator(randomMessage)

console.log(printRandom)