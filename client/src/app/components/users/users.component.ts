import { Component, OnInit } from '@angular/core';
import { User } from '../../services/user/user';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: []
})
export class UsersComponent implements OnInit {
  users: User[];
  selectedUser: User;

  constructor (private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }

  addUser(name: string, password: string, email: string): void {
    name = name.trim();
    if (!name) {return}

    password = password.trim();
    if (!password) {return}

    email = email.trim();
    if (!email) {return}

    this.userService.addUser(name, password, email)
        .then(user => {
            this.users.push(user);
            this.selectedUser = null;
        })
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user.id)
        .then(() => {
          this.users = this.users.filter(u => u !== user);
          if (this.selectedUser === user) {this.selectedUser = null;}
        })
  }

  gotoDetail(): void {
     this.router.navigate(['/user', this.selectedUser.id]).then();
  }

}
