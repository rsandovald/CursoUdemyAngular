import { AbstractControl, Validators } from "@angular/forms";

export function primeraLetraMayuscula (): Validators 
{
    return (control: AbstractControl ) =>
    {
        const valor = control.value;     

        if (!valor) return null   ; 
        if (valor.minLength === 0) return  null ; 

        const primeraLetra = valor [ 0]; 
        if (primeraLetra.toString () !== primeraLetra.toString ().toUpperCase ()) 
        {
           
            return {
                primeraLetraMayuscula:  {
                    mensaje: 'La primera letra debe ser mayúscula'
                }                
            }
            return   null ; 
        }
        return null  ; 
    }
}