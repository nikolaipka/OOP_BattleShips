function Ship(x, y, status) {
	var _x = x;
	var _y = y;
	var _status = status;
	
	this.GetX = function() {
		return _x;
	}
	this.GetY = function() {
		return _y;
	}
	this.GetStatus = function() {
		return _status;
	}
	
	this.object = new Grid(20, 20);
}

Ship.prototype.position = function() {
	debugger;
	var array = [];
	var key = 0;
	
	if (this.GetStatus() == false) {
		if (this.GetY() + 2 <= this.object.getRows()) {
			for (var i = this.GetY(); i <= this.GetY() + 2; i++) {
				var id = 'id' + this.GetX() + i;
				array[key] = id;
				key++;
			}
		}
	}
	
	if (this.GetStatus() == true) {
		if (this.GetX() + 2 <= this.object.getCols()) {
			for (var j = this.GetX(); j <= this.GetX() + 2; j++) {
				var id = 'id' + j + this.GetY();
				array[key] = id;
				key++;
			}
		} 

	}
	
	return array;
}