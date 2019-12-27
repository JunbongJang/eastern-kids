import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryTellingComponent } from './story-telling.component';

describe('StoryTellingComponent', () => {
  let component: StoryTellingComponent;
  let fixture: ComponentFixture<StoryTellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryTellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryTellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
