import { Noticia } from './../../banco';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.component.responsive.css' ]
})
export class HomeComponent implements OnInit {

  src:string[] = ["../../../assets/chatgptcapa__s39mq02k.jpg",
    "../../../assets/DeepSeek-R1-modelo.jpg",
    "../../../assets/x-grok-capa-1.jpg"
  ]



  constructor(){}


  ngOnInit(): void {

  }

}
