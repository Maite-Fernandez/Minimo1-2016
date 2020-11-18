import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from './../app/services/subject.service';
import { Subject } from './../app/model/subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  title = 'frontend';

  constructor(public subjectService: SubjectService, private router: Router) { }

  addSubject(){
    this.router.navigateByUrl('/subject/add');
  }
  
  listStudents(){
    this.router.navigateByUrl('/student/get');
  }

  addStudent(){
    this.router.navigateByUrl('/student/add');
  }

  getSubjects(){
    this.router.navigateByUrl('/subject/all');
  }

 
}


