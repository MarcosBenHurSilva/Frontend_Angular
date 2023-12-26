import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'my-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
  })
export class ButtonComponent {
    @Input() label: string = '';
    buttonText: string = 'ACESSAR';
    buttonTexts: string[] = ['VENDER', 'COMPRAR', 'RESERVAR', 'NOVO', 'ESGOTADO']
    buttonNumber: number = 1;
    buttonObject = {
      label1: 'adicionar ao carrinho',
      label2: 'Acessar'
    };
    onButtonClick() {
        console.log('Button clicked!');
        // Perform any actions needed when the button is clicked
      }
}