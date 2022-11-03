import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,AbstractControl } from '@angular/forms';
import { interval } from 'rxjs';
import Swal from 'sweetalert2';
import { AhorcadoServiceService } from '../ahorcado-service.service';
import { Letra } from '../Models/letra';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  constructor(private letrasservice:AhorcadoServiceService) { }

  letras={
    "letra":''
  }

  FormLetra=new FormGroup({
    letraelegida:new FormControl("",)
  })

  comprobar(){
      const letra={
        'letra':this.f['letraelegida'].value
      }
      this.letrasservice.getLetras(letra).subscribe((data:any)=>{
        this.letras=data
        if(this.letras.letra=this.letras.letra){
          Swal.fire(
            'Letra Correcta'
          )
        }
        else{
          Swal.fire(
            'Letra incorrecta'
          )
        }
      })
  }

  ngOnInit(): void {
  }
  get f():{[key:string]:AbstractControl}{return this.FormLetra.controls}
}
