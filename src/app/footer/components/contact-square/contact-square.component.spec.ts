import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSquareComponent } from './contact-square.component';

describe('ContactSquareComponent', () => {
  let component: ContactSquareComponent;
  let fixture: ComponentFixture<ContactSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
