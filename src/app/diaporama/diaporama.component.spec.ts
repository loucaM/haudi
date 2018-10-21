import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaporamaComponent } from './diaporama.component';

describe('DiaporamaComponent', () => {
  let component: DiaporamaComponent;
  let fixture: ComponentFixture<DiaporamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaporamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaporamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
