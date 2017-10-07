import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions:Object[];

  constructor() {
    this.questions = [
      {
        ques:"What is your name?",
        answer:"My name is John Snow"
      },
      {
        ques:"What is your favourite color?",
        answer:"My favourite color is red"
      },
      {
        ques:"What is your favourite language?",
        answer:"My favourite language is JavaScript"
      }      
    ];
   }

  ngOnInit() {
  }

}
