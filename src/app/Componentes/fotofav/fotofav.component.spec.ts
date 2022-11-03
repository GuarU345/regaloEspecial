import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotofavComponent } from './fotofav.component';

describe('FotofavComponent', () => {
  let component: FotofavComponent;
  let fixture: ComponentFixture<FotofavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotofavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotofavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
