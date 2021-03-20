import { Component, OnInit } from '@angular/core';
import { VideoPlayerService } from '../video-player.service';
import { Routes, ActivatedRoute, Router } from '@angular/router';
import { VideoPlayer } from '../video-player';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videoList:any;
  bollywoodList:VideoPlayer[] = [];
  comedyList:VideoPlayer[] = [];
  danceList:VideoPlayer[] = [];
  angularList:VideoPlayer[] = [];
  allList:any;
  constructor(private ps:VideoPlayerService, private route:ActivatedRoute,private router:Router) { 
    
  }
 
  selectedVideo(data){
    for(var i = 0; i < this.videoList.length; i++){
      if(this.videoList[i].vidName === data){
        // this.ps.relatedVideo.push(this.videoList[i]);
        this.router.navigate(['/video/' + data]);
      }
    }
  }

  getAllData(){
    this.videoList = this.allList;
  }

  getBollywoodData(){
    this.videoList = [];
    this.videoList = this.bollywoodList;
  }
  
  getComedyData(){
    this.videoList = [];
    this.videoList = this.comedyList;
  }

  getAngularData(){
    this.videoList = [];
    this.videoList = this.angularList;
  }

  getDanceData(){
    this.videoList = [];
    this.videoList = this.danceList;
  }

  ngOnInit() {
    this.ps.getVideoList().subscribe(res=>{
      this.videoList = res;
      this.allList = res;
      for(var i = 0; i< this.videoList.length; i++){
        if(this.videoList[i].type == 'Bollywood'){
           this.bollywoodList.push(this.videoList[i]);
        } else if(this.videoList[i].type == 'Comedy'){
          this.comedyList.push(this.videoList[i]);
        }else if(this.videoList[i].type == 'Dance'){
          this.danceList.push(this.videoList[i]);
        }else if(this.videoList[i].type == 'Angular'){
          this.angularList.push(this.videoList[i]);
        } 
      }
    })
  }

}
