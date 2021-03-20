import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { VideoPlayer } from './video-player';
@Injectable({
  providedIn: 'root'
})
export class VideoPlayerService {
  relatedVideo:VideoPlayer[];
  constructor(private http: HttpClient) { }

  url = "https://raw.githubusercontent.com/Manzar3677/test/master/videoPlayer";
  
  
  getVideoList(){
    return this.http.get(`${this.url}`);  
  }
}
