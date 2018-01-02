import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jquery2Component } from './jquery2.component';

describe('Jquery2Component', () => {
  let component: Jquery2Component;
  let fixture: ComponentFixture<Jquery2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jquery2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jquery2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
