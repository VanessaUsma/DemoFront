import { Component,OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Colores } from 'src/app/Modelos/Colores';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  col: Colores = new Colores();
  constructor(private router:Router,private service:ServiceService){

  }

  ngOnInit(): void {
    
  }

  Guardar(Nombre:string,Estado: string,Observaciones: string,Usuario: string,Fechamodificacion: string)
  {
    this.col.nombre = Nombre;
    this.col.estado = Estado;
    this.col.observaciones = Observaciones;
    this.col.usuario = Usuario;
    this.col.fechamodificacion = Fechamodificacion;


    this.service.createColores(this.col)
    .subscribe(data=>
      {
        alert("El color se agregó con exito");
        this.router.navigate(["Listar"])
      })
  }
}
