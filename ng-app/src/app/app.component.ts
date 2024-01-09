import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Formbuilder, FormsModule, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  onUsrInput (inputEle: HTMLInputElement): void {
    console.log(`User typed: ${inputEle.value}`);
  }
}


