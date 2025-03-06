import { Noticia, Noticia2 } from './../../banco';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

constructor(private route:ActivatedRoute){}

id:string="0"
noticiaSingle:Noticia2= {
  id:"0",
  photo:"",
  description:"",
  noticia:""
}



setValues(id:string){
    const result = Noticia.filter(art => art.id == this.id)[0];
}

ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
        this.id = params.get("id") || ""
   })
    Noticia.map((not, i)=>{
        if(not.id == this.id){
          this.noticiaSingle = not;
        }
   })
}





}
