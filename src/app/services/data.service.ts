import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions:Question[];
  constructor() { 
    this.questions = [
      {
        ques:"What is your name?",
        answer:"My name is John Snow",
        hide:true
      },
      {
        ques:"What is your favourite color?",
        answer:"My favourite color is red",
        hide:true
      },
      {
        ques:"What is your favourite language?",
        answer:"My favourite language is JavaScript",
        hide:true
      }      
    ];
  }
  getQuestions(){
    return this.questions;
  }

}
