import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth.service'
import { Observable } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault()

    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value

    this.auth.getUserDetails(username, password).subscribe(data => {
      if(data.success) {
        //redirect to admin
        this.router.navigate(['admin'])
        this.auth.setLoggedIn(true)
      } else {
        window.alert(data.message)
      }
    })
    console.log(username, password)
  }

}
