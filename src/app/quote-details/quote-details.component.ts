import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quoter'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isComplete= new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  like=0;
  dislike=0;

  clickLike(){
    this.like=this.like+=1;
  }
  clickUnlike(){
    this.dislike=this.dislike+=1;
  }

  constructor() { }

  ngOnInit() {
  }

}
