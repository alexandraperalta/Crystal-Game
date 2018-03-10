var wins = 0;
var losses = 0;

init();

function init() {
    var targetNumber = Math.floor(Math.random() * 102) + 19
    var currentNumber = 0;
    var crystalAVal = Math.floor(Math.random() * 12) + 1;
    var crystalBVal = Math.floor(Math.random() * 12) + 1;
    var crystalCVal = Math.floor(Math.random() * 12) + 1;
    var crystalDVal = Math.floor(Math.random() * 12) + 1;

    var buttonA = $("#crystalA");
    var buttonB = $("#crystalB");
    var buttonC = $("#crystalC");
    var buttonD = $("#crystalD");

    buttonA.attr("value", crystalAVal);
    buttonB.attr("value", crystalBVal);
    buttonC.attr("value", crystalCVal);
    buttonD.attr("value", crystalDVal);
    $(".currentNumbers").text(currentNumber);
    $(".targetNumber").text(targetNumber);
    $(".wins").text(wins);
    $(".losses").text(losses);

    $("[id^='crystal']").off("click");//needed this because the onclick was firing multiple times as the games were increasing++++++
    $("[id^='crystal']").on('click', function () {
        console.log(this.value);
        currentNumber += parseInt(this.value);
        $(".currentNumbers").text(currentNumber);
        if (currentNumber == targetNumber) {
            //WIN!
            wins++;
            $(".wins").text(wins);
            init();
        }
        else if (currentNumber > targetNumber) {
            //LOSE!
            losses++;
            $(".losses").text(losses);
            init();
        }
    });
}