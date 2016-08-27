

function Task(name, workingHours) {
	if (isNaN(name)) {
		var _name = name;
	} else {
		return 'Invalid name format';
	}
	if (!isNaN(workingHours) || workingHours > 0) {
		var _workingHours = workingHours;
	} else {	
		return 'Working hours must be a positive number'
	}
	this.getName = function() {
		return _name;
	}
	this.setName = function(name) {
		if (!isNaN(name)) {
            return 'Invalid name format';
        }
		_name = name;
	}
	this.getWorkingHours = function() {
		return _workingHours;
	}
	this.setWorkingHours = function(WorkingHours) {
		if (isNaN(WorkingHours) || WorkingHours < 0) {
            return 'Working hours must be a positive number';
        }
		_workingHours = WorkingHours;
	}
}