import { Component, OnInit } from '@angular/core';
import {ViewStateService} from '../../core/view-state.service';
declare var $: any;

@Component({
  selector: 'app-sing-a-song',
  templateUrl: './sing-a-song.component.html',
  styleUrls: ['./sing-a-song.component.css']
})
export class SingASongComponent implements OnInit {

  cur_thumbnail = 1;

  constructor(public viewStateService: ViewStateService) { }

  ngOnInit() {
  }

  enterFolder(thumbnail_num) {
    this.cur_thumbnail = thumbnail_num;
    $('.card').css('display', 'none');
    if (this.viewStateService.study_state === this.viewStateService.SING_A_SONG) {
      document.getElementById('sing_a_song_video_' + thumbnail_num).style.display = '';
    }
  }


}
