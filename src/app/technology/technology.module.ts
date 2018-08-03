import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { technologyRoutes } from './technology-routes';

import { technologyListComponent } from './technologyList/technology-list.component';
import { TechnologyDetailsComponent } from './technology-details/technology-details.component';
import { TechnologyThumbnailComponent } from './technology-thumbnail/technology-thumbnail.component';
import { TechnologyService } from './shared/technology.service';
import { RouterModule } from '../../../node_modules/@angular/router';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(technologyRoutes)
  ],
  declarations: [
    technologyListComponent,
    TechnologyThumbnailComponent,
    TechnologyDetailsComponent
  ],
  exports:[
    
  ],
  providers:[TechnologyService]
})
export class TechnologyModule { }
