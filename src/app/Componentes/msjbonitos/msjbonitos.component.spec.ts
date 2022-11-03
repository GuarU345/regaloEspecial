import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjbonitosComponent } from './msjbonitos.component';

describe('MsjbonitosComponent', () => {
  let component: MsjbonitosComponent;
  let fixture: ComponentFixture<MsjbonitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsjbonitosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjbonitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
