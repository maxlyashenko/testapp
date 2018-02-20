import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Test } from './test';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

@Injectable()
export class EditTestsService{

    constructor(private http: HttpClient){ }

    getTests(){
        return this.http.get('tests.json');
    }

    addTest(name: string) {
      return this.http.post("/tests", name);
    }   
    
    updateQuestion() {

    }
}