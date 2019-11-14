import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {PlatformLocation } from '@angular/common';
import {authorI} from "../interfacesangular";
import {HttpService} from "../http.service";
import { debug } from 'util';



@Component({
  selector: 'app-new-author-component',
  templateUrl: './new-author-component.component.html',
  styleUrls: ['./new-author-component.component.css']
})
export class NewAuthorComponentComponent implements OnInit {
  newAuthor : authorI
  errMsg : string = "";
  constructor(
    private _httpService : HttpService, 
    private _router: Router,
  ) {}

  ngOnInit() {
    this.newAuthor = {authorName : ""}
  }

  submitTheAuthor () {
    console.log("what");
    let obs = this._httpService.makeANewAuthor(this.newAuthor);
    obs.subscribe((data : any) => {
      if (data.message == "err") {
        this.errMsg = data.data.message;
      }
      else if (data.message == "success"){
        console.log(data);
        this._router.navigate(["/"]);
      }
    })
  }

}
