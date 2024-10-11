import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostalsDetailsComponent } from './hostals-details.component';

describe('HostalsDetailsComponent', () => {
  let component: HostalsDetailsComponent;
  let fixture: ComponentFixture<HostalsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostalsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostalsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
