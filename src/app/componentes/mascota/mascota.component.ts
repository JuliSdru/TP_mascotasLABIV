import { Component, OnInit, Input } from '@angular/core';
import { Mascota } from "src/app/clases/mascota/mascota";

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {

  @Input() mascota: Mascota;
  mostrar : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  public verDetalle (event) {
    if(this.mostrar == false)
      this.mostrar = true;
    else
      this.mostrar = false;
  }
}