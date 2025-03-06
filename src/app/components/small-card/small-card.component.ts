import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card.component.responsive.css'  ]
})
export class SmallCardComponent implements OnInit {

  @Input() src:string = ""
  @Input() id:string=""

  constructor(){}

  ngOnInit(): void {

  }

}
