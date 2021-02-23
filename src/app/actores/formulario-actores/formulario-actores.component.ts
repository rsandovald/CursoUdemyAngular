import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit {

  form: FormGroup ; 

  constructor(   private formBuilder: FormBuilder)
  { 

  }

  ngOnInit(): void {

   
    this.form = this.formBuilder.group (
      { nombre:  [ '', 
                  {validators: [Validators.required] , 
                 }, 
                 ], 
        fechaNacimiento: ''
      }
    )
   
  }

}
