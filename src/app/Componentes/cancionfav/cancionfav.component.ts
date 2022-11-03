import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancionfav',
  templateUrl: './cancionfav.component.html',
  styleUrls: ['./cancionfav.component.css']
})
export class CancionfavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  reproducir(){
    const audio=new Audio('assets/Te quiero.mp3')
    audio.play();
    return audio
  }

}
