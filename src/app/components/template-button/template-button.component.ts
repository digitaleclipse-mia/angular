import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-button',
  templateUrl: './template-button.component.html',
  styleUrls: ['./template-button.component.css']
})
export class TemplateButtonComponent implements OnInit {
  @Input() textBtn:String;
  @Input()  classColorBtn:String;

  constructor() { }

  ngOnInit() {
  }

}
