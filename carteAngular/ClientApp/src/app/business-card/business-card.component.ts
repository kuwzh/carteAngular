import { Component } from '@angular/core';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent {

  fullName: string = '';
  title: string = '';
  motto: string = '';
  jobDescription: string = '';
  followers: number = 0;
  following: number = 0;
  projects: number = 0;
}
