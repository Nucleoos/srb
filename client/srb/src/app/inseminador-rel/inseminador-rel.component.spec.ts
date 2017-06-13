import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InseminadorRelComponent } from './inseminador-rel.component';

describe('InseminadorRelComponent', () => {
  let component: InseminadorRelComponent;
  let fixture: ComponentFixture<InseminadorRelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InseminadorRelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InseminadorRelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
