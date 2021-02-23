import { Component, Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  @Input   ()
  peliculas: any [] ; 

  constructor() { 
    this.peliculas = [ 
      {
        titulo: "", 
        fechaLanzamiento: new Date (), 
        precio: 0, 
        poster: ""
      }
    ]    
  }

  ngOnInit(): void {   
    
  }

  remover (indicePelicula:number) : void
  {
    this.peliculas.splice (indicePelicula, 1);     
  }

}
