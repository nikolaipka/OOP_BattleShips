function Computer(year, price, isNotebook, hardDiskMemory, freeMemory, operationSystem) {
	var _year = year;
	var _price = price;
	var _isNotebook = isNotebook;
	var _hardDiskMemory = hardDiskMemory;
	var _freeMemory = freeMemory;
	var _operationSystem = operationSystem;
}

Computer.prototype.changeOperationSystem = function(newOperationSystem) {
	_operationSystem = newOperationSystem;
}

Computer.prototype.useMemory = function(memory){
	if (memory > _freememory) {
		return "Not enough free memory!";
	}
	_freememory -= memory;
}

Computer.prototype.getInfo = function() {
	return 'Year of production: ' + this.getName() + 
			' and I am ' + this.getAge() + ' old';
}


var pc1 = new Computer(2015, 799, false, 1000, 800, 'windows');
var pc2 = new Computer(2016, 1099, true, 500, 300, 'windows');

