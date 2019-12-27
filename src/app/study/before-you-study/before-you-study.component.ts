import {Component, OnInit, PipeTransform, SecurityContext} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-before-you-study',
  templateUrl: './before-you-study.component.html',
  styleUrls: ['./before-you-study.component.css']
})
export class BeforeYouStudyComponent implements OnInit {

  cur_color = 'red';

  constructor() {
    if (window.addEventListener) {
      window.addEventListener('message', this.receiveMessage.bind(this), false);
    } else {
      (window as any).attachEvent('onmessage', this.receiveMessage.bind(this));
    }
  }

  ngOnInit() {
  }


  hideIframe(color) {
    this.cur_color = color;
    const video_elem = document.getElementById(color + '_video') as HTMLVideoElement;
    video_elem.style.display = '';
    document.getElementById('before_you_study_iframe').style.display = 'none';
    video_elem.play();
  }

  hideVideo(color) {
    document.getElementById('before_you_study_iframe').style.display = '';
    const video_elem = document.getElementById(color + '_video') as HTMLVideoElement;
    video_elem.pause();
    video_elem.currentTime = 0;
    video_elem.style.display = 'none';
  }

  // https://stackoverflow.com/questions/41444343/angular-2-window-postmessage
  receiveMessage: any = (e: any) =>  {
    if (e.data === 'red_clicked') {
      this.hideIframe('red');
    } else if (e.data === 'green_clicked') {
      this.hideIframe('green');
    } else if (e.data === 'yellow_clicked') {
      this.hideIframe('yellow');
    } else if (e.data === 'blue_clicked') {
      this.hideIframe('blue');
    } else if (e.data === 'orange_clicked') {
      this.hideIframe('orange');
    } else if (e.data === 'purple_clicked') {
      this.hideIframe('purple');
    }
  }


}
