import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasbonitasComponent } from './notasbonitas.component';

describe('NotasbonitasComponent', () => {
  let component: NotasbonitasComponent;
  let fixture: ComponentFixture<NotasbonitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotasbonitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasbonitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
