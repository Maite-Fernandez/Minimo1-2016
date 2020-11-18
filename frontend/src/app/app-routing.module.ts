import { SubjectListComponent } from './subject-list/subject-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentFormComponent } from './student-form/student-form.component';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'subject/all'},
  { path: 'subject/all', component: SubjectListComponent},
  { path: 'student/all', component: StudentListComponent},
  { path: 'subject/add', component: SubjectFormComponent},
  { path: 'student/:name', component: StudentFormComponent},
  { path: 'subject/addStudent/:subject', component: StudentFormComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }