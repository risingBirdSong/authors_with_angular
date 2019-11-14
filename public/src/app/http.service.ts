import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {authorI} from "./interfacesangular";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http : HttpClient) {  }

  getAllTheAuthors () {
    console.log("getting here?");
    return this._http.get('/allauthors');
  }

  makeANewAuthor(newAuthor : authorI) {
    return this._http.post("/newauthor", newAuthor);
  }

  getOneAuthor(id : string){
    return this._http.get(`/details/${id}`);
  }

  editAuthor(id : string, author : authorI){
    //  //app.put("/editauthor/:id",
    return this._http.put(`/editauthor/${id}`, author);
  }

  deleteAuthor(id : string){
    return this._http.delete(`/deleteauthor/${id}`);
  }

}
