import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-notasbonitas',
  templateUrl: './notasbonitas.component.html',
  styleUrls: ['./notasbonitas.component.css']
})
export class NotasbonitasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  click1(){
    Swal.fire(
      'Tendremos una casa muy bonita'
    )
  }
  click2(){
    Swal.fire(
      'Esta frase me hace muy feliz'
    )
  }
  click3(){
    Swal.fire(
      'Tu me causas demasiada paz'
    )
  }

}
