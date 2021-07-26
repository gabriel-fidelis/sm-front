import { Component, OnInit } from '@angular/core';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sm-header',
  templateUrl: './sm-header.component.html',
  styleUrls: ['./sm-header.component.scss']
})
export class SmHeaderComponent implements OnInit {


  graduationCap = faGraduationCap;

  constructor() { }

  ngOnInit(): void {
  }

}
