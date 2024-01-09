import { Component, ViewChild } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { TodoListComponent } from './todo-list/todo-list.component'
import { Todo } from './common/Todo'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  @ViewChild(TodoListComponent) compoTodoList!: TodoListComponent

  title = 'Todo List'
  delButtonDisabled = true

  onAddTodo (task: HTMLInputElement, description: HTMLInputElement): void {
    const todo: Todo = new Todo(task.value, description.value, false)
    this.compoTodoList.addTodo(todo)
    task.value = ''
    description.value = ''
  }

  onEvtTodoListLen (todoListLen: number): void {
    this.delButtonDisabled = !(todoListLen > 0)
  }

  onDelTodo (): void {
    this.compoTodoList.delTodo()
  }
}
