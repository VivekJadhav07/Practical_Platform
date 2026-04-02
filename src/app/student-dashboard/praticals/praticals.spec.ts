import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Praticals } from './praticals';

describe('Praticals', () => {
  let component: Praticals;
  let fixture: ComponentFixture<Praticals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Praticals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Praticals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
