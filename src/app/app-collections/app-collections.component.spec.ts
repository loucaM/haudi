import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCollectionsComponent } from './app-collections.component';

describe('AppCollectionsComponent', () => {
  let component: AppCollectionsComponent;
  let fixture: ComponentFixture<AppCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
