import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMenuSetting: boolean = false;
  isMenuUser: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  onOpenSetting() {
    this.isMenuSetting = !this.isMenuSetting;
    if (this.isMenuUser) {
      this.isMenuUser = false;
    }
  }

  onOpenMenuUser() {
    this.isMenuUser = !this.isMenuUser;
    if (this.isMenuSetting) {
      this.isMenuSetting = false;
    }
  }

  onCloseMenu() {
    this.isMenuUser = false;
    this.isMenuSetting = false;
  }

  

}
