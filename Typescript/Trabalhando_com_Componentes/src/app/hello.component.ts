import { Component, Input } from "@angular/core";

@Component({
    selector: 'hello',
    templateUrl: './hello.component.html',
    styleUrl: './app.component.css'
})

export class HellooComponent {
    @Input() name: string | undefined;
}