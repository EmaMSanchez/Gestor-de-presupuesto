import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.module';
import { IngresoService } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
ingresos:Ingreso[]=[];
constructor(private ingresosServicio:IngresoService){}

ngOnInit(){
  this.ingresos = this.ingresosServicio.ingresos;
}

eliminarRegistro(ingreso:Ingreso){
 this.ingresosServicio.eliminar(ingreso) //se llama a el servicio y el objeto enviado por onclick se captura y se envia a el servicio que borra el objeto de la base de datos
}
}
