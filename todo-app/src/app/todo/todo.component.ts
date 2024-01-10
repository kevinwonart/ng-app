import { Component, Input, ViewChild, EventEmitter } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ TodoListComponent, CommonModule, ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})

export class TodoComponent {
  tasks: Task[] = [];

  addTask(newTask: Task) {
    this.tasks.push(newTask);
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
