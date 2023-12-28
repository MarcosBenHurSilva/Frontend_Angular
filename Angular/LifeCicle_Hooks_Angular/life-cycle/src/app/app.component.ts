import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { BodyComponent } from './body/body.component';
import { CheckSampleComponent } from './check-sample/check-sample.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
            FormsModule,
            RouterOutlet,
            TitleComponent,
            BodyComponent,
            CheckSampleComponent
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'life-cycle';
}
