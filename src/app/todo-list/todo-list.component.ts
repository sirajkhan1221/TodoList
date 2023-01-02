import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent  {
  Todaysdate = new Date();
  task = '';
  title = 'To Do List';

  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  daysOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  month = this.months[this.Todaysdate.getMonth()];
  year = this.Todaysdate.getFullYear();
  day = this.daysOfTheWeek[this.Todaysdate.getDay()];
  date = this.Todaysdate.getDate();

  todoList = [
    { taskName: 'Fix bug', completed: false },
    { taskName: 'Write documentation', completed: false },
  ];

  addTodo(task: string) {
    if (task != '') {
      let taskobj = { taskName: task, completed: false };
      this.todoList.push(taskobj);
      this.task = ""
    }
  }
  taskCompleted(index:number){
   this.todoList[index].completed =!this.todoList[index].completed;
    
  }
  remove(index:number){
   this.todoList.splice(index,1)
  }

}
 