import { Component, OnInit } from '@angular/core';
import { Shoes } from '../interfaces/shoes'
import { ShoesService } from '../services/shoes.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  shoes: Shoes = {
    nombre: null,
    descripcion: null,
    genero:null,
    modelo: null,
    stock: null
  }

  constructor(private shoesService: ShoesService) {
    
   }

  ngOnInit(): void {
  }
  guardarProd(){
    this.shoesService.save(this.shoes).subscribe((data)=>{
      alert('Todo bien');
      console.log(data);
      
    }, (error)=>{
      console.log(error);
      alert('Ops');
      
    });
    
  }

}
