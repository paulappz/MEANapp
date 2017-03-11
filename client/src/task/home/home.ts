
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TaskService } from '../../providers/task.service';
import { Task } from '../../task';
 
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage {
  tasks: Task[];
  constructor(public nav: NavController, private taskService: TaskService) {
this.taskService.getTasks()
 .subscribe(tasks => {
   this.tasks = tasks;
   console.log(tasks);
 });


 
}
}