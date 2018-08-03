import {Component} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {Router} from '@angular/router'
import { TechnologyService } from '../shared/technology.service';

@Component({
    templateUrl:'./technology-details.component.html',
    styleUrls:['./technology-details.component.css']
})

export class TechnologyDetailsComponent{
    event:any
    constructor(private eventService:TechnologyService,private route:ActivatedRoute,private routeBack:Router){

  }

    ngOnInit(){
       this.event=  this.eventService.getArticle(this.route.snapshot.params['id']);
  }

  cancel(){
      this.routeBack.navigate(['/technology'])
  }
}