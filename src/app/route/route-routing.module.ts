import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoListComponent } from '../video-list/video-list.component';
import { ReletedVideoListComponent } from '../releted-video-list/releted-video-list.component';


const routes: Routes = [
  {path:'',component:VideoListComponent},
  {path:'home',component:VideoListComponent},
  {path:'video/:title',component:ReletedVideoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
