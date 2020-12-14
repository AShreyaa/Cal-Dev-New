import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispAllListsComponent } from './disp-all-lists.component';

describe('DispAllListsComponent', () => {
  let component: DispAllListsComponent;
  let fixture: ComponentFixture<DispAllListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispAllListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispAllListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
