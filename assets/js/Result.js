function Result(scores) {
	this.scores = scores;
	
}

Result.prototype.gameoverWin = function () {
    document.querySelector('canvas').style.display = 'none';
    document.getElementById('results-container').style.display = "none";
    var p = document.createElement('P');
    document.querySelector('body').appendChild(p);
    document.querySelector('p').innerHTML = 'You win!';
};

Result.prototype.gameoverLost = function () {
    document.querySelector('canvas').style.display = 'none';
    document.getElementById('results-container').style.display = "none";
    var p = document.createElement('P');
    document.querySelector('body').appendChild(p);
    document.querySelector('p').innerHTML = 'Game Over!';
};

Result.prototype.scoresCalculate = function () {
    this.scores += 10;
    document.getElementById('pts').innerHTML = 'Points:'+ this.scores;
};