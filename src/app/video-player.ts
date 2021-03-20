export class VideoPlayer {
  vidTitle:string;
  title:string;
  vidDate:string;
  vidView:string;
  videoUrl:string;
  vidName:string;
  type:string;

  constructor(vidTitle:string,title:string,vidDate:string,vidView:string,videoUrl:string,vidName:string,type:string){
      this.vidTitle = vidTitle;
      this.title = title;
      this.vidDate = vidDate;
      this.vidView = vidView;
      this.videoUrl = videoUrl;
      this.vidName = vidName;
      this.type = type;
  }
}
