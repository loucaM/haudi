import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }
  viewMenu = false;

  onViewMenu() {

    if (this.viewMenu) {
      this.viewMenu = false ;
    } else {
      this.viewMenu = true ;
    }
    console.log(this.viewMenu);
  }
  ngOnInit() {
  }


}
