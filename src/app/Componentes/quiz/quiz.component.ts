import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { interval } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  Horas(){
    Swal.fire(
      'Por cada letra incorrecta te tendras que esperar 1 hora',
    )
    const contador=interval(2000)
    contador.subscribe(()=>{
      this.router.navigate(['ahorcado'])
    })
    
  }
  Minutos(){
    Swal.fire(
      'Por cada letra incorrecta te tendras que esperar 10 min',
    )
    const contador=interval(2000)
    contador.subscribe(()=>{
      this.router.navigate(['ahorcado'])
    })
  }

}
