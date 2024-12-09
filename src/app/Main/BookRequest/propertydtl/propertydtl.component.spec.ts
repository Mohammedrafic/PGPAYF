import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertydtlComponent } from './propertydtl.component';

describe('PropertydtlComponent', () => {
  let component: PropertydtlComponent;
  let fixture: ComponentFixture<PropertydtlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertydtlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertydtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
