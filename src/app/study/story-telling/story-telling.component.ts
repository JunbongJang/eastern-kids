import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ViewStateService} from '../../core/view-state.service';
import {UserService} from '../../core/user.service';

@Component({
  selector: 'app-story-telling',
  templateUrl: './story-telling.component.html',
  styleUrls: ['./story-telling.component.css']
})
export class StoryTellingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
