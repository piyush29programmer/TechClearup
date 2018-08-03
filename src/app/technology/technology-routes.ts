import {Routes} from '@angular/router';


import { technologyListComponent } from './technologyList/technology-list.component';
import { TechnologyDetailsComponent } from './technology-details/technology-details.component';


export const technologyRoutes:Routes=[
    {path:'technology' , component:technologyListComponent},
    {path:'technology/:id' , component:TechnologyDetailsComponent}
    
]