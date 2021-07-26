import { Component, OnInit } from '@angular/core';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sm-sidebar',
  templateUrl: './sm-sidebar.component.html',
  styleUrls: ['./sm-sidebar.component.scss']
})
export class SmSidebarComponent implements OnInit {

  constructor() { }



  clipboardList = faClipboardList;

  opened:boolean = false;

  ngOnInit(): void {
  }

}
