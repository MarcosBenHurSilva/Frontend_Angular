import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/buttons/button.component';
import { SubmitButtonComponent } from './components/buttons/submit_button.component';
import { FormComponent } from './components/forms/form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
            RouterOutlet, 
            ButtonComponent, 
            FormComponent, 
            SubmitButtonComponent
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'Trabalhando_com_Componentes';
}
