import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Colores } from 'src/app/Modelos/Colores';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-edt',
  templateUrl: './edt.component.html',
  styleUrls: ['./edt.component.css']
})
export class EdtComponent implements OnInit{
  
  col:Colores = new Colores;

  constructor(private router:Router,private service:ServiceService){
  }

  ngOnInit(): void {
    this.Editar(); 
  }

  Editar(){
    let nombre=localStorage.getItem('nombre') ;
    if (nombre !=null)
    {
      alert("Si trae datos "+ nombre)
      this.service.getColoresById(nombre)
      .subscribe(data=>{
      this.col = data; 
      }) 
    }
    else
    {
      alert("No hay ningun dato")
    }
  }
  Actualizar(colores:Colores){
    this.service.updateColores(colores)
    .subscribe(data=>{
      this.col=data;
      alert("Se actualizo correctamente")
      this.router.navigate(["Listar"])
    })

  }
}
