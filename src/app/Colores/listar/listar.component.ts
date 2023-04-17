import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Colores } from 'src/app/Modelos/Colores';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  colores:Colores[];

  constructor(private service:ServiceService, private router:Router){}
  
  ngOnInit(){
      this.service.getColores()
      .subscribe(data=>{
        this.colores=data; 
      }); 
  }

  Editar(colores:Colores):void{
    localStorage.setItem("nombre",colores.nombre.toString());
    this.router.navigate(["Edit"]);
  }

  Delete(colores:Colores){
    console.log(colores.nombre)
    // this.service.deleteColores(colores)
    // .subscribe(data =>{
    //    this.colores=this.colores.filter(c=>c!==colores)
    //    alert("Usuario eliminado"); 
    //  })
  } 

}

