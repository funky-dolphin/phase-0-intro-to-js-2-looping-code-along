function writeCards(names, gift) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push("Thank you, " + names[i] + ", for the wonderful " + gift + " gift!");
    }
    return messages;
}

const count = 10
function countDown(count){
let countDown = 10
while (countDown >= 0){
    console.log(countDown--)
}
} countDown(10)
