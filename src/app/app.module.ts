import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { EditQuestionsComponent } from './components/edit-questions/edit-questions.component';
import { EditTestsComponent } from './components/edit-tests/edit-tests.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TestComponent } from './components/test/test.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ViewResultsDetailsComponent } from './components/view-results-details/view-results-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports:      [ 
        BrowserModule, 
        FormsModule, 
        AppRoutingModule
    ],
    declarations: [ 
        AppComponent,
        TestComponent,
        EditQuestionsComponent,
        EditTestsComponent,
        LoginComponent,
        RegistrationComponent,
        UserListComponent,
        ViewResultsDetailsComponent 
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }