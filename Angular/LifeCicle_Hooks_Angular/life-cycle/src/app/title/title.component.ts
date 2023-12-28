import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit, OnChanges{

  @Input() nome:string = '';

  constructor(){
    //console.log(`Construtor ${this.nome}`);
  }

  ngOnInit(): void {
    //this.nome = this.nome + "x"
    //console.log(`OnInit ${this.nome}`);
  }

  ngOnChanges(): void {
    //console.log(`OnChange ${this.nome}`);
  }

}
