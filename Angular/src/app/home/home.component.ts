import { Component, OnInit } from '@angular/core';
import { ShoesService } from '../services/shoes.service';
import { Shoes } from '../interfaces/shoes'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //API_ENDPOINT = 'http://localhost:8000/api';

  shoes: Shoes[];
  constructor(private shoesService: ShoesService) {
    this.getShoes();
  }
  getShoes(){
    this.shoesService.get().subscribe((data: Shoes[])=>{
      this.shoes = data;
    }, (error)=>{
      console.log(error);
      alert("Ops, No se han podido cargar los registros")
    });
  }

  ngOnInit(): void {
  }
  delete(id){
    if(confirm('Seguro que desea eliminar')){
      this.shoesService.delete(id).subscribe((data)=> {
        alert("Elimindo con exito");
        console.log(data);
        this.getShoes();
      },(error)=>{
        console.log(error);

      });
    }
  }

}
