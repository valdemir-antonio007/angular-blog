import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.component.responsive.css' ]
})
export class BigCardComponent implements OnInit {

  @Input() srcOrig:string=""
  @Input() description:string=""
  @Input() title:string=""
  @Input() content:string=""
  @Input() id:string=""

  constructor(){}

  ngOnInit(): void {

  }

}
