import { Component, OnInit } from '@angular/core';
import { Test } from '../../test';
import { HttpClient } from '@angular/common/http';
import { EditTestsService } from '../../edit-tests.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit-tests',
  templateUrl: './edit-tests.component.html',
  styleUrls: ['./edit-tests.component.css'],
  providers: [EditTestsService]
})
export class EditTestsComponent implements OnInit {
    constructor(private editTestsService: EditTestsService) { }

    tests: Test[] = [];
    selectedTest: Test;
    isVisible:boolean = false;

    ngOnInit() {
      this.getTests();
    }

    getTests(): void {
      this.editTestsService.getTests().subscribe(data => this.tests = data["tests"]);
    }

    onSelect(test: Test){
      this.selectedTest = test;
    }

    onVisible() {
      this.isVisible = !this.isVisible;
    }
}