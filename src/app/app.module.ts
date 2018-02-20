import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';

import { HttpClientModule }   from '@angular/common/http';

import { AppComponent }   from './app.component';
import { EditQuestionsComponent } from './components/edit-questions/edit-questions.component';
import { EditTestsComponent } from './components/edit-tests/edit-tests.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TestComponent } from './components/test/test.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ViewResultsDetailsComponent } from './components/view-results-details/view-results-details.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { LanguageComponent } from './elements/language/language.component';
import { SideNavComponent } from './elements/sidenav/sidenav.component';

import { EditQuestionsService } from './edit-questions.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';

const routes: Routes = [
    { path: '', redirectTo: 'registration', pathMatch: 'full' },
    { path: 'edit-questions', component: EditQuestionsComponent },
    { path: 'edit-tests', component: EditTestsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'test', component: TestComponent },
    { path: 'user-list', component: UserListComponent },
    { path: 'view-results-details', component: ViewResultsDetailsComponent },
    { path: 'admin-panel', component: AdminPanelComponent },
    { path: '**', component: NotFoundComponent },
  ]

@NgModule({
    imports:      [ 
        BrowserModule, 
        FormsModule, 
        RouterModule.forRoot(routes),
        HttpClientModule,
        BrowserAnimationsModule,
        MatSidenavModule
    ],
    declarations: [ 
        AppComponent,
        TestComponent,
        EditQuestionsComponent,
        EditTestsComponent,
        LoginComponent,
        NotFoundComponent,
        RegistrationComponent,
        UserListComponent,
        ViewResultsDetailsComponent,
        LanguageComponent,
        AdminPanelComponent,
        SideNavComponent
    ],
    providers: [ EditQuestionsService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }