import { Component,
         OnInit,
         DoCheck,
         AfterContentChecked,
         AfterContentInit,
         AfterViewChecked,
         AfterViewInit,
        OnDestroy } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-check-sample',
  standalone: true,
  imports: [],
  templateUrl: './check-sample.component.html',
  styleUrl: './check-sample.component.css'
})
export class CheckSampleComponent implements OnInit,
DoCheck,
AfterContentChecked,
AfterContentInit,
AfterViewChecked,
AfterViewInit,
OnDestroy{

  quantidade:number = 0

  constructor(){}

  adicionar(){
    this.quantidade += 1;
  }

  decrementar(){
    this.quantidade -= 1;
  }

  //checked → contentent → view
  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInitn");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngOnDestroy(): void {
    console.log("Good bye my friend!!! 😿 Seu componente foi destruido.")
  }

}
