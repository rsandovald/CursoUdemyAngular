import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { generate } from 'rxjs';
import { generoCreacionDTO } from '../formulario-genero/genero';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  modelo: generoCreacionDTO; 

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.modelo = {nombre: 'Drama'};   
  }

  guardarCambios(genero: generoCreacionDTO)
  {
    console.log (genero); 
    this.router.navigate (['/generos']); 
  }


}
