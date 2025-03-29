function startGame() {
    alert("Game Started! Choose your numbers.");
}
function btn1() {
    var box1 = Number(document.getElementById('one').value);
    document.getElementById('expect').textContent = "Expected: " + (220 + box1);
}
function btn2() {
    var box2 = document.getElementById('two').value;
    var result1 = "";
    for (var i = 0; i < box2.length; i++) {
        var digits = Number(box2[i]);
        var subtraction = 10 - digits;
        result1 += subtraction;
    }
    document.getElementById('three').value = result1;
}
function btn3() {
    var box3 = document.getElementById('four').value;
    var result1 = "";
    for (var i = 0; i < box3.length; i++) {
        var digits = Number(box3[i]);
        var subtraction = 10 - digits;
        result1 += subtraction;
    }
    document.getElementById('five').value = result1;
}
function add() {
    var total = Number(document.getElementById('one').value) +
        Number(document.getElementById('two').value) +
        Number(document.getElementById('three').value) +
        Number(document.getElementById('four').value) +
        Number(document.getElementById('five').value);
    document.getElementById('actual').textContent = "Actual: " + total;
}