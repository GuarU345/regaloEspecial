import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ver(){
    return alert("Estas segura que lo deseas ver es demasiada hermosura para el ser humano")
  }
  final(){
    return alert("Es el final de la pagina mas no el de nuestra historia")
  }
  continuara(){
    return alert("Una pequeña parte de una historia que apenas comienza")
  }
  clarocontinuar(){
    Swal.fire(
      'claro que continuaria si somos el uno para el otro'
    )
  }
  resolver(){
    Swal.fire(
      'Jugaras un ahorcado para poder abrirme'
    )
  }
  motivar(){
    Swal.fire(
      'algo tan simple nos motiva mucho'
    )
  }

}
