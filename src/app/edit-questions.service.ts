import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from './question';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

@Injectable()
export class EditQuestionsService{

    constructor(private http: HttpClient){ }

    questions: Question[] = [];

    getQuestions(){
      return this.http.get("questions.json");
    }

    addQuestion(question: Question) {
      return this.http.post('/api/questions', question);
    }

    updateQuestion(question: Question) {
        return this.http.put('/api/questions/' + question.id, question);
    }

    deleteQuestion(id: number) {
        return this.http.delete('/api/questions/' + id);
    }

    

}