import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CoreModule} from './core/core.module';
import { StudyComponent } from './study/study.component';
import { ActivityComponent } from './study/activity/activity.component';
import { BeforeYouStudyComponent } from './study/before-you-study/before-you-study.component';
import { BoardComponent } from './study/board/board.component';
import { DanceComponent } from './study/dance/dance.component';
import { SingASongComponent } from './study/sing-a-song/sing-a-song.component';
import { StoryTellingComponent } from './study/story-telling/story-telling.component';
import { PhonicsComponent } from './study/phonics/phonics.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SafePipe } from './pipe/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudyComponent,
    ActivityComponent,
    BeforeYouStudyComponent,
    BoardComponent,
    DanceComponent,
    SingASongComponent,
    StoryTellingComponent,
    PhonicsComponent,
    PageNotFoundComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
