import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglerDemoComponent } from './singler-demo.component';

describe('SinglerDemoComponent', () => {
  let component: SinglerDemoComponent;
  let fixture: ComponentFixture<SinglerDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglerDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
