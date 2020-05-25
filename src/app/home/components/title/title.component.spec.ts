import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatIconModule } from "@angular/material/icon";
import { TranslateModule } from "@ngx-translate/core";

import { TitleComponent } from "./title.component";

describe("TitleComponent", () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TitleComponent],
      imports: [TranslateModule.forRoot(), MatIconModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
