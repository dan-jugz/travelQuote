import { Component, OnInit } from '@angular/core';
import { Quote } from '../quoter'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1,'Sir Richard Burton','The gladdest moment in human life is a departure into unknown lands',new Date(2019,5,28)),
    new Quote(2,'Jennifer Lee','Be fearless in the pursuit of what sets your soul on fire.',new Date(2017,3,31)),
    new Quote(3,'Seneca','Travel and change of place impart new vigor to the mind',new Date(2011,7,13)),
    new Quote(4,'Antoine de St.exupery','He who would travel happily must travel light.', new Date(1999,3,27)),
    new Quote(5,'Alex kamau','The most treaturous roads have the most beautiful destinations',new Date(2004,7,4))
]

toggleDetails(index){
  this.quotes[index].showQuote = !this.quotes[index].showQuote;
};

addNewQuote(quotes){
  let quoteLength = this.quotes.length;
  quotes.id=quotes.Length+1
  quotes.completeDate = new Date(quotes.completeDate)
  this.quotes.push(quotes)
}



  constructor() { }

  ngOnInit() {
  }

}
