import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispAllNotesComponent } from './disp-all-notes.component';

describe('DispAllNotesComponent', () => {
  let component: DispAllNotesComponent;
  let fixture: ComponentFixture<DispAllNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispAllNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispAllNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
