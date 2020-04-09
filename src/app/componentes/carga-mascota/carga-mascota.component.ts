import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/clases/mascota/mascota';

@Component({
  selector: 'app-carga-mascota',
  templateUrl: './carga-mascota.component.html',
  styleUrls: ['./carga-mascota.component.css']
})
export class CargaMascotaComponent implements OnInit {

  nombre : string = "";
  imagen: string = "";
  tipo: string = "perro";
  listaTipo:string[] = ["PERRO","GATO","PEZ"];
  lista : Array<Mascota> = [];

  constructor() { }

  ngOnInit(): void {
  }

  public enviar(event):void{
    this.lista.push(new Mascota(this.nombre, this.imagen, this.tipo));
  }
}
