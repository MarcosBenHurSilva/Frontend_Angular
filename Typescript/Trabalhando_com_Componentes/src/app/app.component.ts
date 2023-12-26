import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/buttons/button.component';
import { SubmitButtonComponent } from './components/buttons/submit_button.component';
import { FormComponent } from './components/forms/form.component';
import { EntryDataComponent } from './components/entry-data/entry-data.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
            FormsModule, 
            RouterOutlet,
            ButtonComponent, 
            FormComponent, 
            SubmitButtonComponent,
            EntryDataComponent
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'Trabalhando_com_Componentes';
  buttonLabel: string = 'CARRINHO';
  buttonSecond:string = 'Click me 😊'
}
