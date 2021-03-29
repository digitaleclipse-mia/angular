import { Component, Input, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-template-table-radio',
  templateUrl: './template-table-radio.component.html',
  styleUrls: ['./template-table-radio.component.css']
})
export class TemplateTableRadioComponent implements OnInit {
  @Input() numberColumns:Number;
  @Input() titlesRadioTable:any;
  @Input() nameRadioTable:String;
  dataTitle:any;
  dataColumn:any;

  constructor() { }

  ngOnInit() {
  }

  changeClass(value){
    this.dataTitle=document.querySelectorAll(`.title`);
    for (const iterator of this.dataTitle) {
      if(iterator.innerText==value){
        iterator.classList.value="title titleActive";
      }else{
        iterator.classList.value="title";
      }
    }

    this.dataColumn=document.querySelectorAll(`.contentColumn`);
    for (const iterator of this.dataColumn) {
      if(iterator.attributes[2].nodeValue==value){
        iterator.classList.value="contentColumn contentActive";
      }else{
        iterator.classList.value="contentColumn";
      }
    }
    
  }


}
