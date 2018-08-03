import {Component,Input,EventEmitter} from '@angular/core'

@Component({
    selector:'tech-thumbnail',
    templateUrl:'./technology-thumbnail.component.html',
    styleUrls:['./technology-thumbnail.component.css']
})

export class TechnologyThumbnailComponent{
@Input() event:any
}