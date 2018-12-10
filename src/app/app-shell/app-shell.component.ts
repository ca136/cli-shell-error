import { Component, OnInit } from '@angular/core';

import forEach from 'lodash-es/forEach';

@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.css']
})
export class AppShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    forEach([1, 2, 3, 4, 5], (number) => console.log);
  }

}
