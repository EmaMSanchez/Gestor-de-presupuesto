import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent {
@Input() presupuestoTotal:number;
@Input() ingresoTotal:number;
@Input() egresoTotal:number;
@Input() porcentajeTotal:number;
}
