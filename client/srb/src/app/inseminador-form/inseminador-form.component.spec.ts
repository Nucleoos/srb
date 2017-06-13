import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InseminadorFormComponent } from './inseminador-form.component';

describe('InseminadorFormComponent', () => {
  let component: InseminadorFormComponent;
  let fixture: ComponentFixture<InseminadorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InseminadorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InseminadorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
