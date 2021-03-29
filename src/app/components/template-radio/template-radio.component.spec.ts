import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRadioComponent } from './template-radio.component';

describe('TemplateRadioComponent', () => {
  let component: TemplateRadioComponent;
  let fixture: ComponentFixture<TemplateRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
