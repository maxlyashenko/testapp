import { Component, OnInit } from '@angular/core';
import { Question } from '../../question';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
    constructor() { }

    questions: Question[] = [];


    ngOnInit() {
    }

    timer() {

    }

    getQuestionById() {

    }

    answerTheQuestion() {
      
    }
}