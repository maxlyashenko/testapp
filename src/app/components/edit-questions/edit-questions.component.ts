import { Component, OnInit } from '@angular/core';
import { Question } from '../../question';
import { HttpClient } from '@angular/common/http';
import { EditQuestionsService } from '../../edit-questions.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit-questions',
  templateUrl: './edit-questions.component.html',
  styleUrls: ['./edit-questions.component.css'],
  providers: [EditQuestionsService]
})
export class EditQuestionsComponent implements OnInit {
   
  isActive:boolean = false;
  isVisible:boolean = false;
  isAnswer:boolean = false;
  isOption:boolean = false;
  questions: Question[] = [];
  selectedQuestion: Question;
  selectedOption: number;
  constructor(private editQuestionsService: EditQuestionsService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(): void {
    this.editQuestionsService.getQuestions().subscribe(data => this.questions = data["questions"]);
  }

  addQuestion(question: Question) {
    this.editQuestionsService.addQuestion(question).subscribe();
  }

  onSelect(question: Question){
    this.selectedQuestion = question;
  }

  onVisible() {
    this.isVisible = !this.isVisible;
  }

  showAnswer() {
    this.isAnswer = !this.isAnswer;
  }

  showOption() {
    this.isOption = !this.isOption;
  }
}
