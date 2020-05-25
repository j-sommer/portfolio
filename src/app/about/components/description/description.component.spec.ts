import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatIconModule } from "@angular/material/icon";
import { TranslateModule } from "@ngx-translate/core";

import { DescriptionComponent } from "./description.component";

describe("DescriptionComponent", () => {
  let component: DescriptionComponent;
  let fixture: ComponentFixture<DescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DescriptionComponent],
      imports: [TranslateModule.forRoot(), MatIconModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
