import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { IngresoService } from '../ingreso/ingreso.service';
import { EgresoService } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.module';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  tipo: string = 'ingreso';
  descripcionInput: string;
  valorInput: number;
  validacion: string = '';
  @Output() emitidor = new EventEmitter<string>();
  tipoOperacion(evento: Event) {
    this.tipo = (evento.target as HTMLSelectElement).value;
  }

  constructor(
    private ingresoServicio: IngresoService,
    private egresoServicio: EgresoService
  ) {}

  @ViewChild('referenciaLocal', { static: false }) referenciaLocal: NgForm;

  agregarValor() {
    if (this.referenciaLocal.form.valid) {
      this.validacion = '';
      this.emitidor.emit(this.validacion);
      if (this.tipo === 'ingreso') {
        this.ingresoServicio.ingresos.push(
          new Ingreso(this.descripcionInput, this.valorInput)
        );
      } else {
        this.egresoServicio.egresos.push(
          new Ingreso(this.descripcionInput, this.valorInput)
        );
      }
    } else {
      this.validacion = 'Complete el Formulario';
      this.emitidor.emit(this.validacion);
    }
  }
}
