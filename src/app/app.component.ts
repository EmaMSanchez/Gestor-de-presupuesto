import { Component } from '@angular/core';
import { IngresoService } from './ingreso/ingreso.service';
import { EgresoService } from './egreso/egreso.service';
import { Ingreso } from './ingreso/ingreso.module';
import { Egreso } from './egreso/egreso.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto-app';
  ingresos:Ingreso[]=[];
  egresos:Egreso[]=[];
  mensajee:string;

  constructor(private insgresoServicio:IngresoService, private egresoServicio:EgresoService){
        this.ingresos = insgresoServicio.ingresos;
        this.egresos = egresoServicio.egresos;
  }

  getIngresoTotal(){

    let ingresoTotal:number=0;
    this.ingresos.forEach(ingreso =>{ingresoTotal += ingreso.valor;});
    return ingresoTotal;
  }
  getEgresoTotal(){

    let egresoTotal:number=0;
    this.egresos.forEach(egreso =>{egresoTotal += egreso.valor;});
    return egresoTotal;
  }

  getPorcentajeTotal(){
    return this.getEgresoTotal()/this.getIngresoTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getEgresoTotal();
  }

  mostrarMens(mensaje:string){
    this.mensajee = mensaje;
  }
}
