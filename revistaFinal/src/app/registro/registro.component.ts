import { Component, OnInit } from '@angular/core';

import {RemotoService} from '../remoto.service';
import { iremota } from './iremota';
import { from } from 'rxjs';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public json: iremota[]=null;
  constructor(private informacionweb:RemotoService) { }

  ngOnInit() {
  }

  sololetras(e){
    var key = e.keyCode || e.which;

    var teclado = String.fromCharCode(key);

    var letras = " abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZÑ";

    var especiales = "8-37-38-46-164";


    if(letras.indexOf(teclado)==-1)
    {
        return false;
    }
  }

  solonumeros(e){
    var key = e.keyCode || e.which;

    var teclado = String.fromCharCode(key).toLowerCase();

    var numeros = "1234567890";

    if(numeros.indexOf(teclado)==-1)
    {
        return false;
    }
  }

  public registrar(nombre,apellido,email,cedula,contrasena,contrasena2,genero,direccion,tipoCuenta){

    if(contrasena.value == contrasena2.value)
    {
      this.informacionweb.registrarUsuario(nombre,apellido,email,cedula,contrasena,genero,direccion,tipoCuenta)
      .subscribe(data=>{console.log(data)});
    }
    else
    {
      alert("las contraseñas no coinciden");
    }
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



}
