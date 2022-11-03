import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})
export class CancionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cancion1(){
    const audio=new Audio('assets/Polaroid.mp3')
    audio.play();
    return audio
  }
  cancion2(){
    const audio=new Audio('assets/Save your Tears.mp3')
    audio.play();
    return audio
  }
  cancion3(){
    const audio=new Audio('assets/Hopeless Opus.mp3')
    audio.play();
    return audio
  }
  cancion4(){
    const audio=new Audio('assets/Amarte.mp3')
    audio.play();
    return audio
  }
  cancion5(){
    const audio=new Audio('assets/Cambiaste.mp3')
    audio.play();
    return audio
  }
  cancion6(){
    const audio=new Audio('assets/Caminar de tu mano.mp3')
    audio.play();
    return audio
  }

}
