import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; //adicionar em todos


@Component({
    selector: 'app-entry-data',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './entry-data.component.html',
    styleUrls: ['./entry-data.component.css']
  })
export class EntryDataComponent {
    placeholder:string = "email";
    placepass: string = "senha";
    color:string="red"
}