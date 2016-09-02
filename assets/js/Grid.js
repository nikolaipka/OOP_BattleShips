
function Grid(rows, cols) {
	var _rows = rows;
	var _cols = cols;
	var _size = 30;
	
	this.getRows = function() {
		return _rows;
	};
	this.setRows = function(value) {
		_rows = value;
	};
	this.getCols = function() {
		return _cols;
	};
	this.setCols = function(value) {
		_cols = value;
	};
	this.getSize = function() {
		return _size;
	};
};

Grid.prototype.draw = function() {	
    var container = document.getElementById('container');
    for (var i = 0; i < this.getRows(); i++ ) {
    	for (var j = 0; j < this.getCols(); j++) {
    		var square = document.createElement("div");
    		square.id = 'id' + i + j;
    		square.style.position = "absolute";
			square.style.top = i * this.getSize() + 'px';
			square.style.left = j * this.getSize() + 'px';
    		square.style.width = this.getSize() + 'px';
    		square.style.height = this.getSize() + 'px';;
    		square.style.backgroundColor = 'blue';
    		container.appendChild(square);
    	}     
    }
};