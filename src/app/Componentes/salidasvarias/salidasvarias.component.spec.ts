import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidasvariasComponent } from './salidasvarias.component';

describe('SalidasvariasComponent', () => {
  let component: SalidasvariasComponent;
  let fixture: ComponentFixture<SalidasvariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalidasvariasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidasvariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
