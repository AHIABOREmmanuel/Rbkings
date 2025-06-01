import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APROPOSComponent } from './apropos.component';

describe('APROPOSComponent', () => {
  let component: APROPOSComponent;
  let fixture: ComponentFixture<APROPOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [APROPOSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APROPOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
