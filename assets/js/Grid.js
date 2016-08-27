
function Grid(cellX, cellY) {
	var _cellX;
	var _cellY;
	var _PlayGrid = [];
	
	this.getCellX = function() {
		return _cellX;
	};
	this.getCellY = function() {
		return _cellY;
	};
	this.getPlayGrid = function() {
		return _PlayGrid;
	};
	this.setPlayGrid = function(value) {
		_PlayGrid.push(value);
	};
};

Grid.prototype.CreateGrid = function () {
    var x = this.getCellX();  //20
    var y = this.getCellY();  //20

    for (var i = 0; i < x; i++) {
        for (var j = 0; j < y; j++) {
            this.setPlayGrid([i][y]);
        };
    };
};

Grid.prototype.Visualize = function () {
	
    var container = document.createElement('div');
    container.id = 'container';
    container.style.height = '300px';
    container.style.width = '300px';
    container.style.backgroundColor = 'grey';
    var body = document.querySelector('body');
    body.appendChild(container);
    debugger;
    for (var i = 0  ; i < 1 ; i++ ) {
    	for (var j = i; j < i + 1; j++) {
    		var square = document.createElement("div");
    		square.id = 's' + j + i;
    		square.style.width = '50px';
    		square.style.height = '50px';
    		square.style.backgroundColor = 'green';
    		square.style.margin = "5px";
    		container.appendChild(square);
    	}     
    }
};