import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirreComponent } from './birre.component';

describe('BirreComponent', () => {
  let component: BirreComponent;
  let fixture: ComponentFixture<BirreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
