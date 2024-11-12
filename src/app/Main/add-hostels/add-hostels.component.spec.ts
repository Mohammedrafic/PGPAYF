import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHostelsComponent } from './add-hostels.component';

describe('AddHostelsComponent', () => {
  let component: AddHostelsComponent;
  let fixture: ComponentFixture<AddHostelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHostelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHostelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
