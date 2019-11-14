
export interface authorI{
  _id? : string
  authorName : string,
  numOfBooks? : number,
  publisher? : string,
  avgRating? : number, 
  currentlyWorkingOnBook? : boolean,
  //i'll default faveQoutes to string array for now but come back later and change it to qouteI array
  faveQoutes? : string[],
  books? : bookI[],
}

export interface qouteI{
  qoute : string, 
  saidBy : string,
}

export interface bookI{
  author : authorI,
  pages : number,
  likes : number,
  characters : characterI[]
}

export interface characterI{
  charName : string,
  qoutes : string[],
  majorChar : boolean,

}
