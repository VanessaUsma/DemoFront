import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Colores } from '../Modelos/Colores';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  colores:Colores[]; 
  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/demo/parametros';

  getColores(){
    return this.http.get<Colores[]>(this.Url);
  }
  createColores(colores:Colores){
    return this.http.post<Colores>(this.Url,colores); 
  }
  getColoresById(nombre:string){
    return this.http.get<Colores>(this.Url +"/"+ nombre);
  }
  updateColores(colores:Colores){
    return this.http.put<Colores>(this.Url+"/"+colores.nombre,colores)
  }
  deleteColores(colores:Colores){
    return this.http.delete<Colores>(this.Url+"/"+colores.nombre)
  }
}
