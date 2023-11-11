import { Injectable } from '@angular/core';
import { Egreso } from './egreso.module';

@Injectable({
  providedIn: 'root'
})
export class EgresoService {
  egresos:Egreso[]=[new Egreso("Alquiler de Departamento", 3000), new Egreso("Ropa", 100)];
  constructor() { }

  eliminarEgreso(egreso:Egreso){
    const indice:number = this.egresos.indexOf(egreso);
    this.egresos.splice(indice,1);
  }
}
