import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_servives/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor() { }

  // tslint:disable-next-line:variable-name
  ngOnInit(private _authService: AuthService) {
  }

  login()
  {
    this._authService.login(this.model).subscribe(next=>{
      console.log('Logged in successfully');
    }, error => {
      console.log('Failed to login');
    });
   console.log(this.model);
  }
}
