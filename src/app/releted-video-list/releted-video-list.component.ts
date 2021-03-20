import { Component, OnInit } from '@angular/core';
import { VideoPlayerService } from '../video-player.service';
import { VideoPlayer } from '../video-player';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-releted-video-list',
  templateUrl: './releted-video-list.component.html',
  styleUrls: ['./releted-video-list.component.css']
})


export class ReletedVideoListComponent implements OnInit {
 
  reletedVideoList:any;
  videoTitle;
  title;
  vidDate;
  vidView;
  selectedVideo: VideoPlayer[] = [];
  videoUrls;
  addArr:any;
  numberOfLikeCount: number = 0;
  numberOfDislikeCount: number = 0;
  Sign:string;
  constructor(private ps:VideoPlayerService,private route:ActivatedRoute,private router:Router) { 
  }

  selectedVideoInRelated(vidName){
    for(var i = 0; i < this.reletedVideoList.length; i++){
      if(this.reletedVideoList[i].vidName === vidName){
        this.reletedVideoList.push(this.addArr[0]);
        this.router.navigate(['/video/' + vidName]);
      }
    }
  }

  // like count
  likeCount():void{
    if(this.numberOfLikeCount >= 999 && this.numberOfLikeCount <= 99999){
      this.numberOfLikeCount++;
      this.Sign = 'k';
    } else if(this.numberOfLikeCount >= 100000){
      this.numberOfLikeCount++;
      this.Sign = 'M';
    }
    else{
      this.numberOfLikeCount++;
    }
     
  }

  dislikeCount(){
    if(this.numberOfDislikeCount >= 999 && this.numberOfDislikeCount <= 99999){
      this.numberOfDislikeCount++;
      this.Sign = 'k';
    } else if(this.numberOfDislikeCount >= 100000){
      this.numberOfDislikeCount++;
      this.Sign = 'M';
    }
    else{
      this.numberOfDislikeCount++;
    }
  }
  ngOnInit() {
    
    this.ps.getVideoList().subscribe(res=>{
      this.reletedVideoList = res;
    
      this.route.params.subscribe(params=>{
        var selectedTitle = params["vidName"];
       for(var i = 0; i < this.reletedVideoList.length; i++){
         if(this.reletedVideoList[i].vidName == params.title){
              this.videoUrls = this.reletedVideoList[i].videoUrl;
              this.videoTitle = this.reletedVideoList[i].vidTitle;
              this.title = this.reletedVideoList[i].title;
              this.vidDate = this.reletedVideoList[i].vidDate;
              this.vidView = this.reletedVideoList[i].vidView;

              //this.reletedVideoList.splice(i,1);
              this.addArr = this.reletedVideoList.splice(i,1);
              this.numberOfLikeCount = 0;
              this.numberOfDislikeCount = 0;
         }
       }
      });

    })

   
  }

}
