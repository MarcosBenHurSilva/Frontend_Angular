import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'my-form',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
  })
export class FormComponent {
    onButtonSubmit() {
        console.log('Submitted!');
        // Perform any actions needed when the button is clicked
      }
}