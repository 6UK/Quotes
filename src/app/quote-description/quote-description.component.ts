import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-description',
  templateUrl: './quote-description.component.html',
  styleUrls: ['./quote-description.component.css']
})
export class QuoteDescriptionComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isComplete= new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }


  downvotes = 0;
  upvotes = 0;

  voteQuoteUp(){
    this.upvotes = this.upvotes+1;
  }

  voteQuoteDown(){
    this.downvotes=this.downvotes+1;
  }

  constructor() { }

  ngOnInit() {
  }

}
