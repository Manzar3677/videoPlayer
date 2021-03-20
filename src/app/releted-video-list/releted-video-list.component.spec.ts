import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReletedVideoListComponent } from './releted-video-list.component';

describe('ReletedVideoListComponent', () => {
  let component: ReletedVideoListComponent;
  let fixture: ComponentFixture<ReletedVideoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReletedVideoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReletedVideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
