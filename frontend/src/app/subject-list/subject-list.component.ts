import { SubjectService } from './../services/subject.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from '../model/subject';
import { Router } from '@angular/router';


@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  subjects: Subject[];

  constructor(public subjectService: SubjectService, private router: Router) { }

  ngOnInit(): void {
    this.subjectService.getSubjects().subscribe (subjects =>{
      this.subjects = subjects;
    })
  }

  addSubject(){
    this.router.navigateByUrl('/subject/add');
  }

  listStudents(){
    this.router.navigateByUrl('/student/all');
  }
}
