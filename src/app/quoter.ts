export class Quote {
    showQuote: boolean;like:number;unlike:number;
    constructor (
         public id: number,
         public name:string,
         public description:string,
         public completeDate:Date
     ){this.showQuote=false; this.like=0;this.unlike=0;
  }
}
