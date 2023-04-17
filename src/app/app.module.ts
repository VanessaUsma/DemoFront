import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Colores/listar/listar.component';
import { AddComponent } from './Colores/add/add.component';
import { EdtComponent } from './Colores/edt/edt.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EdtComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
