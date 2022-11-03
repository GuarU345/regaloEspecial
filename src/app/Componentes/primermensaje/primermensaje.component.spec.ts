import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimermensajeComponent } from './primermensaje.component';

describe('PrimermensajeComponent', () => {
  let component: PrimermensajeComponent;
  let fixture: ComponentFixture<PrimermensajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimermensajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimermensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
