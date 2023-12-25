import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'my-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
  })
export class ButtonComponent {
    buttonText: string = 'ACESSAR';
    buttonTexts: string[] = ['VENDER', 'COMPRAR', 'RESERVAR', 'NOVO', 'ESGOTADO']
    onButtonClick() {
        console.log('Button clicked!');
        // Perform any actions needed when the button is clicked
      }
}