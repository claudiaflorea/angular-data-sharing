import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Dept } from '../models/DeptModel';
import { MatTableDataSource } from '@angular/material/table';


const ELEMENT_DATA: Dept[] = [
  {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ,
  {deptno : 20, dname : "Sales",  loc :  "Pune"},
  {deptno : 30, dname : "Marketing",  loc :  "Mumbai"},
  {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ,
  {deptno : 20, dname : "Sales",  loc :  "Pune"},
  {deptno : 30, dname : "Marketing",  loc :  "Mumbai"},
  {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ,
  {deptno : 20, dname : "Sales",  loc :  "Pune"},
  {deptno : 30, dname : "Marketing",  loc :  "Mumbai"},
  {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ,
  {deptno : 20, dname : "Sales",  loc :  "Pune"},
  {deptno : 30, dname : "Marketing",  loc :  "Mumbai"},
];

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.scss']
})
export class DeptListComponent implements OnInit, OnChanges {

  @Input() loc:string;

  displayedColumns: string[] = ['deptno', 'dname', 'loc'];
  dataSource = new MatTableDataSource<Dept>(ELEMENT_DATA).data;

  ngOnInit()
  {
    this.dataSource = new MatTableDataSource<Dept>(ELEMENT_DATA).data;
  }

  ngOnChanges()
  {
    this.dataSource = new MatTableDataSource<Dept>(ELEMENT_DATA).data;
    if(this.loc === "All") {
      this.dataSource = this.dataSource;
    } else {
      this.dataSource = this.dataSource.filter(item => item.loc == this.loc);
    } 
  }

  
 
   
}