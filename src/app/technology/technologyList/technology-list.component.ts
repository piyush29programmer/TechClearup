import {Component, OnInit} from '@angular/core';
import { TechnologyService } from '../shared/technology.service';



@Component({   
    templateUrl:'./technology-list.component.html'
})
 

export class technologyListComponent implements OnInit{
    events:any[]
    constructor (private articleService:TechnologyService){

    }
    ngOnInit(){
       this.events=this.articleService.getArticles();
    }
    handleOnClick(eventName){
      
    }
}