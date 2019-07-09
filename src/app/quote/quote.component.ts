import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote('king  ','KING JOSH','with great commitment comes great sucess',new Date(2017,12,12)),
    new Quote('king ','KING JOSH','with certain goals in life one has a bright future',new Date(3,12,2003)),
    new Quote('king  ','KING JOSH','the time is always right to do what is right ',new Date(2017,12,12)),
    new Quote('king ','KING JOSH','only the darkness can see the stars',new Date(3,12,2003)),
    new Quote('king ','KING JOSH','you got to put your behind in your past ',new Date(3,12,2003)),

  ]

  
  deleteQuote(isComplete, index){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete quote published by ${this.quotes[index].publisher}?`)
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }

  }

  addNewQuote(quote){
    quote.days = new Date(quote.days)
    this.quotes.push(quote)
  }
  
  constructor() { }

  ngOnInit() {
  }

}

