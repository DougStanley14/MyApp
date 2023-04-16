import { Component, OnInit } from '@angular/core';
import { SalesDataService } from '../api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [ ]
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private salesDataService: SalesDataService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.salesDataService.salesDataGetUsersGet().subscribe(users => {
      this.users = users;
    });
  }
}

