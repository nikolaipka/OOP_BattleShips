function Computer(year, price, isNotebook, hardDiskMemory, freeMemory, operationSystem) {
	
	var _year = year;
	var _price = price;
	var _isNotebook = isNotebook;
	var _hardDiskMemory = hardDiskMemory;
	var _freeMemory = freeMemory;
	var _operationSystem = operationSystem;
	
	this.getYear = function() {
		return _year;
	};
	this.setYear = function(newYear) {
		_year = newYear;
	};
	this.getPrice = function() {
		return _price;
	};
	this.setPrice = function(newPrice) {
		_price = newPrice;
	};
	this.getIsNotebook = function() {
		return _isNotebook;
	};
	this.setIsNotebook = function(newIsNotebook) {
		_isNotebook = newIsNotebook;
	};
	this.getHardDiskMemory = function() {
		return _hardDiskMemory;
	};
	this.setHardDiskMemory = function(newHardDiskMemory) {
		_hardDiskMemory = newHardDiskMemory;
	};
	this.getFreeMemory = function() {
		return _freeMemory;
	};
	this.setFreeMemory = function(newFreeMemory) {
		_freeMemory = newFreeMemory;
	};
	this.getOperationSystem = function() {
		return _operationSystem;
	};
	this.setOperationSystem = function(newOperationSystem) {
		_operationSystem = newOperationSystem;
	};	
}

Computer.prototype.getInfo = function() {
	return 'Year of production: ' + this.getYear() + 
			', with price ' + this.getPrice() + '$' +
			', PC ' + this.getIsNotebook() + 
			', HDD' + this.getHardDiskMemory() + 'GB' +
			', Free memory: ' + this.getFreeMemory() + 'GB' + 
			', OS: ' + this.getOperationSystem();
}

Computer.prototype.changeOperationSystem = function(newOperationSystem){
	this.setOperationSystem(newOperationSystem);
}

Computer.prototype.useMemory = function(memory){
	if (memory > this.getFreeMemory()) {
		return "Not enough free memory!";
	} else {
		return this.setFreeMemory(this.getFreeMemory() - memory);
	} 
}

var pc1 = new Computer(2015, 799, false, 1000, 800, 'Windows');
var pc2 = new Computer(2016, 1099, true, 500, 300, 'Windows');