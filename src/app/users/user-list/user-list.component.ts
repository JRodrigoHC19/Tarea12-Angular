import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users = [
    {id: 0, name: 'John', email: 'john123@tecsup.com', age: 43, phone: '911122244'},
    {id: 1, name: 'Jane', email: 'jane123@tecsup.com', age: 21, phone: '955511100'},
    {id: 2, name: 'Doe', email: 'doe123@tecsup.com', age: 15, phone: '900077788'},
    {id: 3, name: 'Javier', email: 'javier123@tecsup.com', age: 35, phone: '999111430'},
    {id: 4, name: 'Thomas', email: 'thomas123@tecsup.com', age: 57, phone: '923423412'},
    {id: 5, name: 'Chris', email: 'chris123@tecsup.com', age: 81, phone: '991133440'},
  ]

  constructor(private router: Router){  }

  getUser(id: number){
    this.router.navigate(['users', id])
  }
}
