import { Component, OnInit } from '@angular/core'
import { UserService } from '../user.service'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  message = "Loading..."
  constructor(private user: UserService, private auth: AuthService) { }

  ngOnInit() {
    this.user.getSomeData().subscribe(data => {
      this.message = data.message
    })
  }

}
