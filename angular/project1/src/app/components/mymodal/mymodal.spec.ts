import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mymodal } from './mymodal';

describe('Mymodal', () => {
  let component: Mymodal;
  let fixture: ComponentFixture<Mymodal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mymodal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mymodal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
