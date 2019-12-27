import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ViewStateService} from '../core/view-state.service';
import {UserService} from '../core/user.service';
declare var $: any;

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit {

  constructor(public router: Router,
              public viewStateService: ViewStateService,
              private route: ActivatedRoute,
              public userService: UserService) { }

  ngOnInit() {
    $('.logo_img').hover(function() {
      $(this).addClass('animated jello');
    });
    $('.logo_img').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {
      $(this).removeClass('animated jello');
    });

    $('.card').hover(function() {
      $(this).addClass('animated pulse');
    });
    $('.card').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {
      $(this).removeClass('animated pulse');
    });

    $('.btn').click(function() {
      $(this).addClass('animated rubberBand');
    });
    $('.btn').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {
      $(this).removeClass('animated rubberBand');
    });
  }

  kStateChange(k_state: number) {
    this.viewStateService.k_state = k_state;
  }

  studyStateChange(study_state: string) {
    this.viewStateService.study_state = study_state;
    this.router.navigate([study_state], { relativeTo: this.route});
    this.stateToDisplay();
  }

  stateToDisplay() {
    const state_title = document.getElementById('state_title');
    const border_container = document.getElementById('border_container');
    if (this.viewStateService.study_state === this.viewStateService.SING_A_SONG) {
      state_title.innerHTML = 'Sing a Song';
      state_title.style.color = '#007bff';
      border_container.style.borderColor = '#007bff';
    } else if (this.viewStateService.study_state === this.viewStateService.BEFORE_YOU_STUDY) {
      state_title.innerHTML = 'Before You Study';
      state_title.style.color = '#16a2b8';
      border_container.style.borderColor = '#16a2b8';
    } else if (this.viewStateService.study_state === this.viewStateService.STORY_TELLING) {
      state_title.innerHTML = 'Story Telling';
      state_title.style.color = '#27a745';
      border_container.style.borderColor = '#27a745';
    } else if (this.viewStateService.study_state === this.viewStateService.BOARD) {
      state_title.innerHTML = 'Board';
      state_title.style.color = '#ffc108';
      border_container.style.borderColor = '#ffc108';
    } else if (this.viewStateService.study_state === this.viewStateService.ACTIVITY) {
      state_title.innerHTML = 'Activity';
      state_title.style.color = '#dc3545';
      border_container.style.borderColor = '#dc3545';
    } else if (this.viewStateService.study_state === this.viewStateService.PHONICS) {
      state_title.innerHTML = 'Phonics';
      state_title.style.color = '#c93cb0';
      border_container.style.borderColor = '#c93cb0';
    } else if (this.viewStateService.study_state === this.viewStateService.DANCE) {
      state_title.innerHTML = 'Dance';
      state_title.style.color = '#c93cb0';
      border_container.style.borderColor = '#c93cb0';
    }
  }

}
