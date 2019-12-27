import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {StudyComponent} from './study/study.component';
import {ActivityComponent} from './study/activity/activity.component';
import {BeforeYouStudyComponent} from './study/before-you-study/before-you-study.component';
import {BoardComponent} from './study/board/board.component';
import {DanceComponent} from './study/dance/dance.component';
import {SingASongComponent} from './study/sing-a-song/sing-a-song.component';
import {StoryTellingComponent} from './study/story-telling/story-telling.component';
import {PhonicsComponent} from './study/phonics/phonics.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/study/activity', pathMatch: 'full'},
  // { path: 'main', component: MainMenuComponent, data: { state: 'main-menu' }},
  { path: 'study', component: StudyComponent, data: { state: 'study' }, children: [
      { path: 'activity', component: ActivityComponent, data: { state: 'activity' } },
      { path: 'before_you_study', component: BeforeYouStudyComponent, data: { state: 'before_you_study' } },
      { path: 'board', component: BoardComponent, data: { state: 'board' } },
      { path: 'dance', component: DanceComponent, data: { state: 'dance' } },
      { path: 'sing_a_song', component: SingASongComponent, data: { state: 'sing_a_song' } },
      { path: 'phonics', component: PhonicsComponent, data: { state: 'phonics' } },
      { path: 'story_telling', component: StoryTellingComponent, data: { state: 'story_telling' } }
    ] },

  { path: 'page-not-found', component: PageNotFoundComponent },

  // routes get parsed from top to bottom so  always put this double asterisk at the end
  { path: '**', redirectTo: '/page-not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true, paramsInheritanceStrategy: 'always', preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
