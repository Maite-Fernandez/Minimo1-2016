import { ActivatedRoute } from '@angular/router';
import { StudentService } from './../services/student.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Student } from '.././model/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[];

  constructor(public studentService: StudentService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe (students => {
      this.students = students;
    });
  }
}
