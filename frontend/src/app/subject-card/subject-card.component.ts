import { Component, Input, OnInit } from '@angular/core';
import { Subject } from '../model/subject';
import { Student } from '../model/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject-card',
  templateUrl: './subject-card.component.html',
  styleUrls: ['./subject-card.component.css']
})
export class SubjectCardComponent implements OnInit {

  @Input()
  subject: Subject;

  @Input()
  subjectIndex: number;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addStudent(){
    this.router.navigateByUrl('/subject/addStudent/' + this.subject.name);
  }
}
