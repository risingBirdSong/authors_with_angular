import { Component } from '@angular/core';
import { HttpService } from './http.service';
import {authorI} from "../../../interfaces";
import { Router,NavigationEnd, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  ngOnInit() {
    this.title = "testing";
    // this.anAuthor.faveQoutes = [];
    this.callTheServiceToGetAllAuthors();
    console.log("anything?");
    this.OnHomePage = true;
    this.currenturl = "/";
    ;

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        ;
          // Function you want to call here
      }
   });
  }

  whatIsActivatedRoute() {
    console.log('snapshot',this._route.snapshot.toString())
  }

  getDataFromChild(DataFromChild){
    console.log('back from the child', DataFromChild);
  }


  callTheServiceToGetAllAuthors() {
    console.log("____ huh anything???");
    let observable = this._httpService.getAllTheAuthors();
    observable.subscribe((data : authorI[]) => {
      console.log("got all the authors", data);
      this.allTheAuthors = data;
    })
  }

  moveAwayFromHome() {
    this.OnHomePage = false;
  }

  newauthorpage(){
    console.log("doesnt matter");
  }

}
