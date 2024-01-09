import { Component, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common'

import { type Todo } from '../common/Todo'

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})

export class TodoListComponent {
  @Output() evtTodoListLen = new EventEmitter()

  todoList: Todo[] = []
  selIndex = -1

  onSel (idx: number): void {
    if (this.selIndex >= 0) { this.todoList[this.selIndex].active = false }
    this.selIndex = idx
    this.todoList[this.selIndex].active = true
  }

  delTodo (): void {
    if (this.selIndex >= 0) {
      this.todoList.splice(this.selIndex, 1)
      this.evtTodoListLen.emit(this.todoList.length)
    }

    this.selIndex = -1
  }

  addTodo (todo: Todo): void {
    this.todoList.push(todo)
    this.evtTodoListLen.emit(this.todoList.length)
  }
}
