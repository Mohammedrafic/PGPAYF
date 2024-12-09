import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdtlComponent } from './userdtl.component';

describe('UserdtlComponent', () => {
  let component: UserdtlComponent;
  let fixture: ComponentFixture<UserdtlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdtlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserdtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
