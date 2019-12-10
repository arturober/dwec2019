import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent implements OnInit {
  @Input() title;

  constructor() { }

  ngOnInit() {
  }

}
