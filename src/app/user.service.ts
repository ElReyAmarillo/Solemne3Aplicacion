import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  validaAlumno(usuario:string ,clave: number): boolean {
    // utilizaremos login=admin y password=1234
      if(usuario=='bryang' && clave==12345 || usuario=='luisc' && clave==12345 ) { 
        return true;
      } else{ 
        return false;
      }    
    } 

    validaDocente(usuario:string ,clave: number): boolean {
      // utilizaremos login=admin y password=1234
        if(usuario=='bryang' && clave==12345 || usuario=='luisc' && clave==12345 ) { 
          return true;
        } else{ 
          return false;
        }
      
      
      }
}
