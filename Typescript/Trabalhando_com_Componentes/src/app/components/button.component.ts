import { Component } from "@angular/core";

@Component({
    selector: 'my-button',
    templateUrl: './button.component.html',
    styleUrl: './button.component.css'
})

export class Button {
    onButtonClick() {
        console.log('Button clicked!');
        // Perform any actions needed when the button is clicked
      }
}