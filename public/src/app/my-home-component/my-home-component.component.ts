import { Component, OnInit} from '@angular/core';
import { HttpService } from '../../../src/app/http.service';
import {authorI} from "../interfacesangular";
import { Router,NavigationEnd, ActivatedRoute } from '@angular/router';
import { debug } from 'util';


@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {

  title = '';
  anAuthor : authorI
  allTheAuthors : authorI[] = [];
  OnHomePage : boolean = true;
  currenturl : string;
  

  constructor(
    private _httpService : HttpService,
    private router: Router,
    private _route: ActivatedRoute,
    ){}
  ngOnInit()
  {
    this.title = "testing";
    // this.anAuthor.faveQoutes = [];
    this.callTheServiceToGetAllAuthors();
    console.log("anything?");
    this.OnHomePage = true;
    this.currenturl = "/";
  }

  getDataFromChild(DataFromChild){
    console.log('back from the child', DataFromChild);
  }


  callTheServiceToGetAllAuthors() {
    console.log("____ huh anything???");
    let observable = this._httpService.getAllTheAuthors();
    observable.subscribe((comeback : {data : authorI[], message : string}) => {

      this.allTheAuthors = comeback.data;
    })
  }

  ShowEditAuthor(id : string){
    this.router.navigate([`/edit/${id}`]);
  }

  deleteMe(id : string){
    let obs =  this._httpService.deleteAuthor(id);
    obs.subscribe((data : any) => {
      this.callTheServiceToGetAllAuthors();
    })
  }

}
