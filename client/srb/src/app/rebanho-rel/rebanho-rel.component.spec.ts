import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebanhoRelComponent } from './rebanho-rel.component';

describe('RebanhoRelComponent', () => {
  let component: RebanhoRelComponent;
  let fixture: ComponentFixture<RebanhoRelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebanhoRelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebanhoRelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
