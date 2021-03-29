import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /** Data Radio Example**/
  titleBoxRadio = 'What would you like?*';
  nameExampleRadio="radioTest";
  srcImgRadio="assets/img/icon-radio-1.png";
  textExampleRadio=`Brand-new creative material`;

  /** Data Button Example**/
  txtBtnExample="I'm done";
  colorBgBtn="green-btn"; //blue-btn - green-btn - yellow-btn - orange-btn - black-btn - default:red

  /** Data Table Radio Example */
  titlesRadioTableExample=[
    {
      "titleRadioTable":"Acquisition",
      "nameRadioTable":"radioTableOption",
      "valueRadioTable":"0",
      "contentRadioTable":"Prospective member"
    },
    {
      "titleRadioTable":"Onboarding",
      "nameRadioTable":"radioTableOption",
      "valueRadioTable":"1",
      "contentRadioTable":"New member of 90 days or less"
    },
    {
      "titleRadioTable":"Engagement",
      "nameRadioTable":"radioTableOption",
      "valueRadioTable":"2",
      "contentRadioTable":"Current member receiving communications year-round"
    },
    {
      "titleRadioTable":"Renewal",
      "nameRadioTable":"radioTableOption",
      "valueRadioTable":"3",
      "contentRadioTable":"Current member eligible for a transition from one plan year to another"
    }
  ];

  /**Data Header Example */
  textLogoExample="Anthem";
  srcIcon1="assets/img/icon-home.png";
  srcIcon2="assets/img/icon-save.png";
  srcIcon3="assets/img/icon-myrequest.png";
  srcIcon4="assets/img/icon-help.png";
  srcIcon5="assets/img/icon-logout.png";
  titleHeaderExample="Welcome, Travis";
  subTitleHeaderExample="Your Government Bussiness Division (GBD) project request begins here";
}
