import {Schema, Model} from 'mongoose';
import * as mongoose from 'mongoose';


export interface authorI extends mongoose.Document {
  _id : string
  authorName : string,
  numOfBooks? : number,
  publisher? : string,
  avgRating? : number, 
  currentlyWorkingOnBook? : boolean,
  //i'll default faveQoutes to string array for now but come back later and change it to qouteI array
  faveQoutes? : string[],
  books? : bookI[],
}

export interface qouteI extends mongoose.Document {
  qoute : string, 
  saidBy : string,
}

export interface bookI extends mongoose.Document {
  author : authorI,
  pages : number,
  likes : number,
  characters : characterI[]
}

export interface characterI extends mongoose.Document {
  charName : string,
  qoutes : string[],
  majorChar : boolean,

}
