import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-radio',
  templateUrl: './template-radio.component.html',
  styleUrls: ['./template-radio.component.css']
})
export class TemplateRadioComponent implements OnInit {

  @Input() titleBoxRadio:String;
  @Input() nameRadio:String;
  @Input() srcImg:String;
  @Input() valueRadio:String;
  @Input() textRadio:String;

  constructor() { }

  ngOnInit() {
  }

}
