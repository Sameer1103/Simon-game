var pattern = [];
var userClickedPattern = [];
var level = 1, i = 0;
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
    $("h1").text("Level " + level);
    level++;
    var randomNo = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNo];
    pattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    i = 0;
}

$(".btn").click(function (event) {
    var userChosenColor;
    userChosenColor = event.currentTarget.id;
    userClickedPattern.push(userChosenColor);
    if (userChosenColor === pattern[i]) {
        playSound(userChosenColor);
        animatePress(userChosenColor);
        i++;
        if (i === level - 1)
            setTimeout(function(){nextSequence();}, 1000);
    }
    else {
        playSound("wrong");
        $("h1").text("Press any key to Restart");
        $("body").addClass("game-over");
        setTimeout(function () { $("body").removeClass("game-over"); }, 100);
    }
});

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animatePress(name) {
    $("." + name).addClass("pressed");
    setTimeout(function () { $("." + name).removeClass("pressed"); }, 100);
}
$(document).keydown(function () {
    level = 1;
    pattern = [];
    userClickedPattern = [];
    nextSequence();
});