$(document).ready();

var total = 0;
var wins = 0;
var losses = 0;

var button1 = Math.floor(Math.random() * 10) + 1;
var button2 = Math.floor(Math.random() * 10) + 1;
var button3 = Math.floor(Math.random() * 10) + 1;
var button4 = Math.floor(Math.random() * 10) + 1;
var goal = Math.floor(Math.random() * 40) + 1;
// console.log(button1);
// console.log(button2);
// console.log(button3);
// console.log(button4);

function compare() {
    if (total === goal) {
        alert("Congratulations! You've won!");
        confirm("Would you like to try again?");
        wins++;
        if (confirm) {
            start();
        }
        else {
            // $("#wins").text("Wins: " + wins);
            // return false;
        }
    }
    if (total > goal) {
        alert("Sorry, you've lost.");
        confirm("Would you like to try again?");
        losses++;
        if (confirm) {
            start();
        }
        else {
            // $("#losses").text("Losses: " + losses);
            // return false;
        }
    }
}

$("#goal").text(goal);
$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);
$("#actualScore").text(total);

function start() {
    button1 = Math.floor(Math.random() * 10) + 1;
    button2 = Math.floor(Math.random() * 10) + 1;
    button3 = Math.floor(Math.random() * 10) + 1;
    button4 = Math.floor(Math.random() * 10) + 1;
    goal = Math.floor(Math.random() * 40) + 1;
    $("#goal").text(goal);
    $("#losses").text("Losses: " + losses);
    total = 0;
    $("#actualScore").text(total)
    $("#wins").text("Wins: " + wins);
}

$("#gemButton1").click(function () {
    total = total + button1;
    $("#actualScore").text(total);
    compare();

});
$("#gemButton2").click(function () {
    total = total + button2
    $("#actualScore").text(total);
    compare();
});
$("#gemButton3").click(function () {
    total = total + button3
    $("#actualScore").text(total);
    compare();
});
$("#gemButton4").click(function () {
    total = total + button4
    $("#actualScore").text(total);
    compare();
});
// console.log(total)
// if (total === goal) {
//     alert("Congratulations! You've won!");
//     confirm("Would you like to try again?");
//     if (confirm) {
//         start();
//     }
//     wins++;
// }

// if (total > goal) {
//     alert("Sorry, you've lost.");
//     confirm("Would you like to try again?");
//     if (confirm) {
//         start();
//     }
//     losses++;
// }
