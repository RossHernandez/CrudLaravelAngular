import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular prueba';
  hola = 'Hola mundo';


  public adios(){
    this.hola = 'adios desde el metodo';
  }
}
