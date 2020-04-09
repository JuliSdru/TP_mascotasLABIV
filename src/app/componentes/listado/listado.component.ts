import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mascota } from 'src/app/clases/mascota/mascota';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  
  @Output() detalle = new EventEmitter<any>();
  @Input() mascota: Mascota;
  boton: string = "Ver Detalle";

  constructor() { }

  ngOnInit(): void {
  }

  click () {
    this.detalle.emit();
    if(this.boton == "Ver Detalle")
      this.boton = "Ocultar";
    else
      this.boton = "Ver Detalle";
  }
}