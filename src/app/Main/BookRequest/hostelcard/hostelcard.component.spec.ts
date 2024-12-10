import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelcardComponent } from './hostelcard.component';

describe('HostelcardComponent', () => {
  let component: HostelcardComponent;
  let fixture: ComponentFixture<HostelcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostelcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostelcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
