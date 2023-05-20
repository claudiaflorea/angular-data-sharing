import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Employee } from '../models/Employee';
import { ActivatedRoute } from '@angular/router';

const ELEMENT_DATA: Employee[] = [
  {number: 1, name: 'Scott', deptno: 9, job: 'Lead'},
  {number: 2, name: 'Abrons', deptno: 4, job: 'Sales'},
  {number: 3, name: 'James', deptno: 6, job: 'PO'},
  {number: 4, name: 'Adam', deptno: 9, job: 'Lead'},
  {number: 5, name: 'Sathya', deptno: 10, job: 'Manager'},
  {number: 6, name: 'Maneesh', deptno: 2, job: 'Very poor'},
  {number: 7, name: 'Haneesh', deptno: 7, job: 'Programmer'},
  {number: 8, name: 'Maria', deptno: 5, job: 'BA'},
  {number: 9, name: 'Camilla', deptno: 8, job: 'Tester'},
  {number: 10, name: 'Jesus', deptno: 10, job: 'Manager'},
];

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnChanges, OnInit {
 
  @Input() job:string;

  filterby: string;

  constructor(
    private route: ActivatedRoute
  ) {}

  empList = ELEMENT_DATA;

  ngOnInit(): void {
      this.empList = this.empList;
      this.route.queryParams
      .subscribe(params => {
        console.log(params); 
        this.filterby = params.filterby;
        console.log(this.filterby); 
      }
    );
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(this.job === "All") {
      this.empList = this.empList;
    } else {
      this.empList = this.empList.filter(item => item.job == this.job);
    }
  }

  

}
