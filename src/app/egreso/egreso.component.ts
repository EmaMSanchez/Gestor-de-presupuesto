import { Component, Input } from '@angular/core';
import { Egreso } from './egreso.module';
import { EgresoService } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent {
  constructor(private servicioEgreso:EgresoService){} ;
  egresos:Egreso [] = this.servicioEgreso.egresos;
  @Input() ingresoTotal:number;
 
  eliminarRegistro(egresoEliminar:Egreso){
    this.servicioEgreso.eliminarEgreso(egresoEliminar);
  }

  calcularPorcentaje(egreso:Egreso){
    return egreso.valor/this.ingresoTotal;
  }
}
