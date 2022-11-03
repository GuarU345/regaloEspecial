import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerasfotosComponent } from './primerasfotos.component';

describe('PrimerasfotosComponent', () => {
  let component: PrimerasfotosComponent;
  let fixture: ComponentFixture<PrimerasfotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimerasfotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerasfotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
