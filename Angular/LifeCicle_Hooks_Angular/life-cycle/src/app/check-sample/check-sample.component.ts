import { Component,
         OnInit,
         DoCheck,
         AfterContentChecked,
         AfterContentInit,
         AfterViewChecked,
         AfterViewInit } from '@angular/core';

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
AfterViewInit{

  constructor(){}
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

}
