import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPractical } from './assign-practical';

describe('AssignPractical', () => {
  let component: AssignPractical;
  let fixture: ComponentFixture<AssignPractical>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignPractical]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignPractical);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
