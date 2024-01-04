import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() parentList: any;
  incr = 0;

  @Output() toParent = new EventEmitter();

  onNotifyParent (event: any): void {
    this.incr++;
    this.toParent.emit(this.incr);
  }
}
