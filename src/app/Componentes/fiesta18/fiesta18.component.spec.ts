import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fiesta18Component } from './fiesta18.component';

describe('Fiesta18Component', () => {
  let component: Fiesta18Component;
  let fixture: ComponentFixture<Fiesta18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fiesta18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fiesta18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
