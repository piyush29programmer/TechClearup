import {Injectable} from '@angular/core'

@Injectable()
export class TechnologyService{

 getArticles(){
     return BLOG;
 }   

 getArticle(id:number){

    return BLOG.find(i=>i.id==id)
 }
}

const BLOG=[
    {
        id:1,
        name : 'Dependency Injection'
    },
    {
        id:2,
        name : '.Net Dev'
    }
]