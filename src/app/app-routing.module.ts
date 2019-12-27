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
  { path: '', redirectTo: '/main/activity', pathMatch: 'full'},
  // { path: 'main', component: MainMenuComponent, data: { state: 'main-menu' }},
  { path: 'main', component: StudyComponent, data: { state: 'main-menu' }, children: [
      { path: 'activity', component: ActivityComponent, data: { state: 'main-menu-study' } },
      { path: 'before-you-study', component: BeforeYouStudyComponent, data: { state: 'main-menu-test' } },
      { path: 'board', component: BoardComponent, data: { state: 'main-menu-info' } },
      { path: 'dance', component: DanceComponent, data: { state: 'main-menu-best' } },
      { path: 'sing-a-song', component: SingASongComponent, data: { state: 'main-menu-myhouse' } },
      { path: 'phonics', component: PhonicsComponent, data: { state: 'main-menu-myhouse' } },
      { path: 'story-telling', component: StoryTellingComponent, data: { state: 'main-menu-myhouse' } }
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
