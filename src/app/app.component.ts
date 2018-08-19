import { Component, OnInit } from '@angular/core';
import { GoogleService, GoogleObj } from './google.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GoogleService]
})
export class AppComponent implements OnInit {
  public googleObj: GoogleObj= new GoogleObj();
  public key: string;
  public sendText:string;
  public result = '';
  private btnSubmit: any;

  keyOptions=[
    {showcase:"English",value:"en-t-i0-und"},
    {showcase:"हिंदी",value:"hi-t-i0-und"},
    {showcase:"मराठी",value:"mr-t-i0-und"},
    {showcase:"ગુજરાતી",value:"gu-t-i0-und"},
    {showcase:"বাঙালি",value:"bn-t-i0-und"},
  ]

  constructor(private _google: GoogleService) {}

  ngOnInit() {
    this.btnSubmit = document.getElementById('btnSubmit');
  }

check(value){
  this.key =value
}


  send() {
    this.btnSubmit.disabled = true;
    this.sendText = (<HTMLInputElement>document.getElementById('textSend')).value
    this.googleObj.setValue(this.sendText,this.key)
    this._google.translate(this.googleObj).subscribe(
      (res: any) => {
        this.btnSubmit.disabled = false;
        if (res[0]=="SUCCESS"){
          this.result = res[1][0][1][0];
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
