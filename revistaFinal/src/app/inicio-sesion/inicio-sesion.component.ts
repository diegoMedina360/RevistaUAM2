import { Component, OnInit } from '@angular/core';
import {RemotoService} from '../remoto.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  constructor(private informacionweb:RemotoService) { }

  ngOnInit() {
  }

  toggle(){
    var nombre= document.getElementById("hey").className;
    if(nombre == "menu-toggle"){
      document.getElementById("hey").className ="menu-toggle active";
      document.getElementById("hey1").className ="nav active";
    }else{
      document.getElementById("hey").className ="menu-toggle";
      document.getElementById("hey1").className ="nav";
    }

   
    
  }

  public iniciarSesion(email,contrasena){
    this.informacionweb.iniciarSesion(email,contrasena);
  }
}
