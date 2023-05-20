import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
 
  selectedLoc = "";
  locations = ["All", "Hyd", "Pune", "Mumbai"];

  selectedJob = "";
  jobs = ["All", "Manager", "Developer", "Tester"];

}