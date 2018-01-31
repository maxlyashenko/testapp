import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }   from './app.component';
import { EditQuestionsComponent } from './components/edit-questions/edit-questions.component';
import { EditTestsComponent } from './components/edit-tests/edit-tests.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TestComponent } from './components/test/test.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ViewResultsDetailsComponent } from './components/view-results-details/view-results-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
    { path: '', redirectTo: 'registration', pathMatch: 'full' },
    { path: 'edit-questions', component: EditQuestionsComponent },
    { path: 'edit-tests', component: EditTestsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'test', component: TestComponent },
    { path: 'user-list', component: UserListComponent },
    { path: 'view-results-details', component: ViewResultsDetailsComponent },
    { path: '**', component: NotFoundComponent },
  ]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
