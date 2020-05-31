import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { PrivacyStatementComponent } from "./privacy-statement.component";

describe("PrivacyStatementComponent", () => {
  let component: PrivacyStatementComponent;
  let fixture: ComponentFixture<PrivacyStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrivacyStatementComponent],
      imports: [MatButtonModule, MatIconModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
