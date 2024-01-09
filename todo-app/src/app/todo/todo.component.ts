import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ TodoListComponent ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @ViewChild(TodoListComponent) child!: TodoListComponent
  onUsrInput (inputTask: HTMLInputElement): void {
    this.child.addItem(inputTask.value);
  }

}
