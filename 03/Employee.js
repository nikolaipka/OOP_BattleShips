
function Employee(name) {
	
	if (isNaN(name)) {
		var _name = name;
	} else {
		return 'Invalid name input';
	}
	
	var _currentTask;
	var _hoursLeft;
	
	this.getName = function () {
        return _name;
    };
    this.setName = function (name) {        
    	_name = name;
    };
    this.getCurrentTask = function () {
        return _currentTask;
    };

    this.setCurrentTask = function (currentTask) {
        _currentTask = currentTask;
    };

    this.getHoursLeft = function () {
        return _hoursLeft;
    };
    this.setHoursLeft = function (hoursLeft) {      
       _hoursLeft = hoursLeft;
    };	
}

Employee.prototype.work = function () {
    var task = this.getCurrentTask();

    if (this.getHoursLeft() - task.getWorkingHours() < 0) {
        task.setWorkingHours(task.getWorkingHours() - this.getHoursLeft());
        this.setHoursLeft(0);
    } else {
    	this.setHoursLeft(this.getHoursLeft() - task.getWorkingHours());
        task.setWorkingHours(0);
    }
};
/*
Employee.prototype.showReport = function () {
	return console.log(this.getName() +  ' team was working on ' + this.getCurrentTask().getName() + '\n' +
	'Working hours left for today: ' + this.getHoursLeft() + '\n' +
	'Working hours left of the task: ' + this.getCurrentTask().getWorkingHours() + '.');   
}
*/
Employee.prototype.showReport = function () {
	
	var EmployeeName = this.getName();
    var TaskName = this.getCurrentTask().getName();
    var EmployeeHoursLeft = this.getHoursLeft();
    var TaskHoursLeft = this.getCurrentTask().getWorkingHours();
 
    return console.log(EmployeeName +  ' team was working on ' +  TaskName + '\n' +
	'Working hours left for today: ' + EmployeeHoursLeft + '\n' +
    'Working hours left of the task: ' +  + TaskHoursLeft + '.');
}