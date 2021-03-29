import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTableRadioComponent } from './template-table-radio.component';

describe('TemplateTableRadioComponent', () => {
  let component: TemplateTableRadioComponent;
  let fixture: ComponentFixture<TemplateTableRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateTableRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateTableRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
