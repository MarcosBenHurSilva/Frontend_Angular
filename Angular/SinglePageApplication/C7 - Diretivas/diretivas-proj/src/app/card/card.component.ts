import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  produtos:string[] = []
  menuType:string = "superuser456"

  constructor(){
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "fonte",
      "monitor"
    ]
  }

  adicionar(){
    this.produtos.push("marcos")
  }

  remover1(){
    this.produtos.pop()
  }

  remover2(index: number){
    this.produtos.splice(index, 1)
  }

  ngOnInit(): void {

  }

}
