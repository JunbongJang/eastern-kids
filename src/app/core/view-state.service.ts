import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewStateService {

  kStateChanged = new Subject<boolean>();
  studyStateChanged = new Subject<boolean>();

  // -------------------GLOBAL CONSTANTS----------------------

  ACTIVITY = 'activity';
  BEFORE_YOU_STUDY = 'before_you_study';
  BOARD = 'board';
  DANCE = 'dance';
  PHONICS = 'phonics';
  SING_A_SONG = 'sing_a_song';
  STORY_TELLING = 'story_telling';

  private _k_state = 1; // 1,2,3
  private _study_state = this.SING_A_SONG;

  constructor() { }

  get k_state(): number {
    return this._k_state;
  }

  set k_state(value: number) {
    this._k_state = value;
    this.kStateChanged.next(true);
  }

  get study_state(): string {
    return this._study_state;
  }

  set study_state(value: string) {
    this._study_state = value;
    this.studyStateChanged.next(true);
  }
}
