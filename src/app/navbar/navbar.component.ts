import { Component, OnInit } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import { AuthService } from '../auth.service'
import { UserService } from '../user.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  currentUrl: string
  link: string
  loggedInStatu$: boolean

  constructor(private router: Router,
              private auth: AuthService,
              private user: UserService) {
    this.router.events.subscribe((_: NavigationEnd) => {
      this.currentUrl = _.url
    }) 
  }

  ngOnInit() {    
  }

}
