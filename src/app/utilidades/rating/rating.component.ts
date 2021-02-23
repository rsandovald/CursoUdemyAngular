import { Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input ()
  maximoRating = 5; 
  @Input ()
  ratingSeleccionado = 0;
  maximoRatingArr= [];
  votado = false; 
  ratingAnterior = 0 ;  

    @Output ()
    rated: EventEmitter <number> = new EventEmitter<number> (); 

  constructor() { }

  ngOnInit(): void {
    this.maximoRatingArr = Array (this.maximoRating).fill (0); 
  }

  manejarMouseEnter(indice: number):void
  {   
    this.ratingSeleccionado = indice  + 1 ;  

  }

  manejarMouseLeave (): void
  {
    if (this.ratingAnterior !==0)
    {   
      this.ratingSeleccionado = this.ratingAnterior; 
    }
    else 
    {
      this.ratingSeleccionado = 0 ; 
    }

  }

  rate (indice: number) : void
  {
    this.ratingSeleccionado = indice  + 1 ;  
    this.votado = true; 
    this.ratingAnterior = this.ratingSeleccionado;    
    this.rated.emit (this.ratingSeleccionado) ; 

  }
}
