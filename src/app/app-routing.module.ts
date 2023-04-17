import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Colores/add/add.component';
import { EdtComponent } from './Colores/edt/edt.component';
import { ListarComponent } from './Colores/listar/listar.component';

const routes: Routes = [
  {path:'Listar', component:ListarComponent},
  {path:'Add', component:AddComponent},
  {path:'Edit', component:EdtComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
