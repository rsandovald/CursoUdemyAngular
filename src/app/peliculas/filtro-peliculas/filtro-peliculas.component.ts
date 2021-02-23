import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from "@angular/common";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  form:  FormGroup;
  generos =  
    [
      {id: 1, nombre: 'Drama'}
      ,{id: 2, nombre: 'Acción'}
      ,{id: 3, nombre: 'Comedia'}
    ]; 

  peliculas  = 
  [
    {titulo: "Spider-Man",     
    enCines: false, 
    proximosEstrenos: true,
    generos: [1, 2],     
    poster: "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX182_CR0,0,182,268_AL_.jpg"
   }

   , {titulo: "Moana", 
     enCines: true, 
     proximosEstrenos: true,
     generos: [3],       
     poster: "https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
    }

    , {titulo: "Inception", 
    enCines: false, 
    proximosEstrenos: false,
    generos: [1],   
    poster: "https://m.media-amazon.com/images/M/MV5BZmQyNTU5NzktYWY4Yy00NzUxLTk0YzQtMDVhMTkxZTUzNTAwXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_UX477_CR0,0,477,268_AL_.jpg"   
    } 
  ]

  peliculasOriginal = this.peliculas;  

  formularioOriginal: {
    titulo:'aa', 
    generoId: 1, 
    proximosEstrenos:true, 
    enCines: true
  }
  
  constructor(
    private formBuilder: FormBuilder, 
    private location: Location, 
    private activateRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.form= this.formBuilder.group (
      {
        titulo:'', 
        generoId: 0, 
        proximosEstrenos:false, 
        enCines: false
      }      
    ); 

    this.leerVAloresURL (); 
    this.buscarPeliculas (this.form.value); 
   
    this.form.valueChanges.subscribe
    (valores => 
      {
        //contiene los controles del form 
        this.peliculas = this.peliculasOriginal; 
        this.buscarPeliculas (valores); 
        this.escribirParametrosBusquedaURL ();
      }) ; 

  }
 
  buscarPeliculas (valores: any)
  {     
    if (valores.titulo)
    {
      this.peliculas = this.peliculas.filter 
      (
        pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1 
      ); 
    }
  
    if (valores.generoId)
    {
      this.peliculas = this.peliculas.filter 
      (
        pelicula => pelicula.generos.indexOf(valores.generoId) !== -1 
      ); 
    }

    if (valores.proximosEstrenos)
    {
      this.peliculas = this.peliculas.filter 
      (
        pelicula => pelicula.proximosEstrenos
      ); 
    }

    if (valores.enCines)
    {
      this.peliculas = this.peliculas.filter 
      (
        pelicula => pelicula.enCines
      ); 
    } 
  }

  limpiar (): void
  {    
    this.form.patchValue (
      {
        titulo:'', 
        generoId: 0, 
        proximosEstrenos:false, 
        enCines: false
      }      
    ); 
  } 

  private escribirParametrosBusquedaURL (): void
  {
    var queryStrings =[]; 

    var valoresFormulario =this.form.value; 

    if (valoresFormulario.titulo)
    {
      queryStrings.push (`titulo=${valoresFormulario.titulo}`); 
    }

    if (valoresFormulario.generoId!= '0')
    {
      queryStrings.push (`generoId=${valoresFormulario.generoId}`); 
    }

    if (valoresFormulario.proximosEstrenos)
    {
      queryStrings.push (`proximosEstrenos=${valoresFormulario.proximosEstrenos}`); 
    }

    if (valoresFormulario.enCines)
    {
      queryStrings.push (`enCines=${valoresFormulario.enCines}`); 
    }

    this.location.replaceState ("peliculas/buscar", queryStrings.join ("&")); 
  }

  private leerVAloresURL () : void
  {
    this.activateRoute.queryParams.subscribe 
    ( (params ) =>
    {
      var objeto : any = {}; 
      if (params.titulo)
      {
        objeto.titulo = params.titulo; 
      }

      if (params.generoId)
      {
        objeto.generoId = Number (params.generoId); 
      }

      if (params.proximosEstrenos)
      {
        objeto.proximosEstrenos = params.proximosEstrenos; 
      }

      if (params.enCines)
      {
        objeto.enCines = params.enCines; 
      }

      this.form.patchValue (objeto) ; 
      
    }
    )
  }
}
