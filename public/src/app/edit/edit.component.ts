import { Component, OnInit } from '@angular/core';
import { authorI } from '../../app/interfacesangular';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { debug } from 'util';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  theAuthorToEdit: authorI = {authorName : null};
  theAuthorsID: string;
  theDisplayName : string;
  errorMsg : string;

  constructor(private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this._route.params.subscribe((params: Params) => {
      this.theAuthorsID = params.id;
    })
  }

  ngOnInit() {
    let obs = this._http.getOneAuthor(this.theAuthorsID);
    obs.subscribe((data: authorI[]) => {
      this.theAuthorToEdit = data[0];
      this.theDisplayName = data[0].authorName;
    })
  }

  submitChanges(){
   let obs =  this._http.editAuthor(this.theAuthorsID, this.theAuthorToEdit);
   obs.subscribe((comeback : any) => {
     if (comeback.message == "success") {
       this._router.navigate([""])
      }
      else {
        
        debugger;
        this.errorMsg = comeback.data.message;
     }
     
   })
  }

}
