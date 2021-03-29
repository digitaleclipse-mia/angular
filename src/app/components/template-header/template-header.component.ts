import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-header',
  templateUrl: './template-header.component.html',
  styleUrls: ['./template-header.component.css']
})
export class TemplateHeaderComponent implements OnInit {
  @Input() textLogo:String;
  @Input() srcIconA:String;
  @Input() srcIconB:String;
  @Input() srcIconC:String;
  @Input() srcIconD:String;
  @Input() srcIconE:String;
  @Input() titleHeader:String;
  @Input() subTitleHeader:String;

  constructor() { }

  ngOnInit() {
  }

}
