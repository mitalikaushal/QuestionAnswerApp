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
    if(localStorage.getItem('questions') === null){
      this.questions = [];
    }else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }
  addQuestion(question:Question){
    let questions;
    if(localStorage.getItem('questions') === null){
      questions = [];
      questions.unshift(question);
      localStorage.setItem('questions',JSON.stringify(questions))
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      questions.unshift(question);
      localStorage.setItem('questions',JSON.stringify(questions));
    }
  }
  deleteQuestion(question:Question){
    for(let i =0; i< this.questions.length;i++){
      if(question == this.questions[i]){
        this.questions.splice(i,1);
      localStorage.setItem('questions',JSON.stringify(this.questions));
        break;
      }
    }
  }

}
