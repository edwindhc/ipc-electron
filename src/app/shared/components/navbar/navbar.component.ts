import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../../services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  logged = false;
  constructor(
    private router: Router,
    public authenticationService: AuthenticationService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
      this.logged = true
  }else{
      this.logged = false;
  }
  }

  disableLogin = true;


  ngOnInit() {
  }
  ngDoCheck(){
    if(this.authenticationService.currentUserValue){
      this.logged = true
    }
  }

  payment(link: String){
    this.router.navigate([link]);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
    this.logged = false
}

}
