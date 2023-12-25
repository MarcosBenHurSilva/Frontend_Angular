import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'submit-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './submit_button.component.html',
    styleUrls: ['./submit_button.component.css']
  })
export class SubmitButtonComponent {
    onButtonSubmit() {
        console.log('Submitted!');
        // Perform any actions needed when the button is clicked
      }
}