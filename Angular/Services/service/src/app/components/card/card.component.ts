import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PokemonData } from '../../models/pokemonData';
import { PokemonService } from '../../services/pokemon.service';
import { TransformadorPipe } from '../../pipes/transformador.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ FormsModule, TransformadorPipe, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  pokemon:PokemonData

  constructor(
    private service:PokemonService
  ) {

    this.pokemon = {
      id:0, name:'',
      sprites:{
        front_default: ''
      },types:[]
    }

  }


  ngOnInit(): void {
    this.getPokemon('pikachu')
  }


  getPokemon(searchName:string){
    this.service.getPokemon(searchName).subscribe(
      {
        next: (res) => {

          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          }
        },
        error: (err) => console.log('not found')
      }
    )
  }

}
