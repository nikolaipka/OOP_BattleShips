
var employee1 = new Employee('Alpha');
var employee2 = new Employee('Bravo');

var taskA = new Task('MD 12 Check A', 180);
var taskD = new Task('A 380 Check D', 50000);

employee1.setHoursLeft(8);
employee2.setHoursLeft(8);

employee1.setCurrentTask(taskA);
employee2.setCurrentTask(taskD);

employee1.work();
employee2.work();

employee1.showReport();
employee2.showReport();