import { Component, OnInit } from '@angular/core';
import { CrearActorComponent } from '../crear-actor/crear-actor.component';
import { actorCreacionDTO } from '../formulario-actores/actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})

export class EditarActorComponent implements OnInit {
  
  modelo: actorCreacionDTO = { nombre:'Ricardo', fechaNacimiento: new Date () }; 
  
  constructor() { }
  
  ngOnInit(): void {
  }

  guardarCambios (actor:actorCreacionDTO)
  { 
    console.log (actor); 
  }
}
