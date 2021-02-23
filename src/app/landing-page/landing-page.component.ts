import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  title = 'front-end';
  peliculasEnCines ; 
  peliculasProximosEstrenos = [] ; 

  ngOnInit(): void {   

    setTimeout(() => {
      this.peliculasEnCines = 
    [ 
      {
        titulo: "Spider-Man", 
        fechaLanzamiento: new Date (), 
        precio: 0, 
        poster: "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX182_CR0,0,182,268_AL_.jpg"
      },
      {
        titulo: "Moana", 
        fechaLanzamiento: new Date (), 
        precio: 0,
        poster: "https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
      }
    ];     
    
    },  500);    
  }

  constructor() {    
    
  }

  manejarRated (voto: number) : void
  {
    alert (voto); 

  }

}
