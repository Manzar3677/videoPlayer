import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoListComponent } from './video-list/video-list.component';
import { ReletedVideoListComponent } from './releted-video-list/releted-video-list.component';
import { RouteRoutingModule } from './route/route-routing.module';
import { VideoPlayerService } from './video-player.service';
import { HttpClientModule } from '@angular/common/http';
import { SafePipePipe } from './safe-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    ReletedVideoListComponent,
    SafePipePipe
  ],
  imports: [
    BrowserModule,
    RouteRoutingModule,
    HttpClientModule
  ],
  providers: [VideoPlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
