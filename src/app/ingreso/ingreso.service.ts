import { Injectable } from '@angular/core';
import { Ingreso } from './ingreso.module';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {
  ingresos:Ingreso[]=[ new Ingreso("Salario", 4000), new Ingreso("Venta Coche", 5000)];
 
  constructor() { }

  eliminar(ingreso:Ingreso){
    const indice:number = this.ingresos.indexOf(ingreso); //ingresa a ingreso y a travez de index of con el objeto recivido calcula el indice del mismo
    this.ingresos.splice(indice,1); //splice elimina el objeto indicado por el indice, tambien debiendodeterminar cuantos objetos deben eliminarse desde el indice, en este caso 1 
  }
}
