import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionfavComponent } from './cancionfav.component';

describe('CancionfavComponent', () => {
  let component: CancionfavComponent;
  let fixture: ComponentFixture<CancionfavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancionfavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancionfavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
