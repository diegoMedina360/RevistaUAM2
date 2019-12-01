import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iremota } from './registro/iremota';

@Injectable({
  providedIn: 'root'
})
export class RemotoService {

  public json: iremota[]=null;
  constructor(private datos:HttpClient) { }

  public registrarUsuario(nombre,apellido,email,cedula,contrasena,genero,direccion,tipoCuenta){

  
    
    return  this.datos.post('http://127.0.0.1:1337/usuarios',{nombre:''+nombre.value,
                                                                  apellido:''+apellido.value,
                                                                  email:''+email.value,
                                                                  cedula:''+cedula.value,
                                                                  contrasena:''+contrasena.value,
                                                                  genero:''+genero.value,
                                                                  direccion:''+direccion.value,
                                                                  tipoCuenta:''+tipoCuenta.value});
                                                                  
  }

  public iniciarSesion(email,contrasena){
   
    this.datos.get<iremota[]>('http://127.0.0.1:1337/inicioSecion/email/'+email.value).subscribe(data=>console.log(data));
  }
}
