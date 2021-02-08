import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  id: any; //Id que viene desde app.module.ts para poder editar
  editing: boolean = false;  //VAriable que comprueba si el id trae algo para poder editar, sino ...
  shoesArray: Shoes[];
  constructor(private shoesService: ShoesService, private ActivatedRoute: ActivatedRoute) {
    this.id = this.ActivatedRoute.snapshot.params['id'];
    //console.log(this.id);
    if(this.id) {
      this.editing = true;
      this.shoesService.get().subscribe( (data: Shoes[]) => {
        this.shoesArray = data;
       // console.log(data);
       this.shoes = this.shoesArray.find((m) => {return m.id == this.id});
       console.log(this.shoes);
       
        
      },error => {
        console.log(error);
        
      });

    }else{
      this.editing = false;
    }
    
   }

  ngOnInit(): void {
  }
  guardarProd(){
    if(this.editing){
      this.shoesService.put(this.shoes).subscribe((data)=>{
        alert('Registro actualizado');
        console.log(data);
      }, (error)=>{
        console.log(error);
        alert('Ops');
      });

    }else{
      this.shoesService.save(this.shoes).subscribe((data)=>{
        alert('Todo bien');
        console.log(data);
      }, (error)=>{
        console.log(error);
        alert('Ops');
        
      });
    }    
  }
}
