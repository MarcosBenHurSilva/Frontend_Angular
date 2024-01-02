import { Component } from '@angular/core';
import { IndexModule } from '../index.module';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [ IndexModule ],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {

}
