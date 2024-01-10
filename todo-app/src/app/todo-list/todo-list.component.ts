import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule } from '@angular/forms';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() tasks: Task[] = [];
  @Output() addTaskEvent = new EventEmitter<Task>();
  @Output() deleteTaskEvent = new EventEmitter<number>();

  newTask: Task = new Task('', '');

  addTask() {
    if (this.newTask.title && this.newTask.description) {
      this.addTaskEvent.emit(this.newTask);
      this.newTask = new Task('', '');
    }
  }

  deleteTask(index: number) {
    this.deleteTaskEvent.emit(index);
  }
}
