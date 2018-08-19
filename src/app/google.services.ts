import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = "https://inputtools.google.com/";

export class GoogleObj {
  text: string;
  itc: string;
  readonly num: number = 101;
  readonly cp: number =0;
  readonly cs: number = 1;
  readonly ie: string = "utf-8";
  readonly oe: string = "utf-8";
  readonly app: string = "demopage";
  constructor(){}
  setValue(text:string,itc:string) {
    this.text = text;
    this.itc = itc;
  }
}

@Injectable()
export class GoogleService {
  constructor(private _http: HttpClient) {}

  translate(obj: GoogleObj) {
    console.log("obj => ",obj);
    return this._http.post(url+"request?text="+obj.text+"&itc="+obj.itc+"&num=101&cp=0&cs=1&ie=utf-8&oe=utf-8&app=demopage",obj);
  }
}


