$(document).ready();

var scoreTotal = [];
var wins = 0;
var losses = 0;

var button1 = Math.floor(Math.random() * 50) + 1;
var button2 = Math.floor(Math.random() * 50) + 1;
var button3 = Math.floor(Math.random() * 50) + 1;
var button4 = Math.floor(Math.random() * 50) + 1;
var goal = Math.floor(Math.random() * 51) + 50;
console.log(button1);
console.log(button2);
console.log(button3);
console.log(button4);

function sum() {

    var total = 0;
    for (var i = 0; i < scoreTotal.length; i++) {
        if (isNaN(scoreTotal[i])) {
            continue;
        }
        total += Number(scoreTotal[i]);
    }
    return total;
}


$("#goal").text(goal);
$("#wins").append(wins);
$("#losses").append(losses);
$("#actualScore").text(sum);

function start() {
    button1 = Math.floor(Math.random() * 50) + 1;
    button2 = Math.floor(Math.random() * 50) + 1;
    button3 = Math.floor(Math.random() * 50) + 1;
    button4 = Math.floor(Math.random() * 50) + 1;
    goal = Math.floor(Math.random() * 51) + 50;
    scoreTotal = [];

}

$("#gemButton1").click(function () {
    console.log(button1);
    scoreTotal.push(button1);
    console.log(scoreTotal);

    $("#actualScore").text(sum);
});
$("#gemButton2").click(function () {
    scoreTotal.push(button2);
    $("#actualScore").text(sum);
});
$("#gemButton3").click(function () {
    scoreTotal.push(button3);
    $("#actualScore").text(sum);
});
$("#gemButton4").click(function () {
    scoreTotal.push(button4);
    $("#actualScore").text(sum);
});

if (sum === goal) {
    alert("Congratulations! You've won!");
    confirm("Would you like to try again?");
        if (confirm) {
            start();
        }
    wins++;
}

if (sum > goal) {
    alert("Sorry, you've lost.");
    confirm("Would you like to try again?");
        if (confirm) {
            start();
        }
    losses++;
}
