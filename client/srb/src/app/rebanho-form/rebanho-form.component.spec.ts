import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebanhoFormComponent } from './rebanho-form.component';

describe('RebanhoFormComponent', () => {
  let component: RebanhoFormComponent;
  let fixture: ComponentFixture<RebanhoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebanhoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebanhoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
