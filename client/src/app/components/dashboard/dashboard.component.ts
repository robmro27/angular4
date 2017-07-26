import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from '../../services/user/user';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ],
})

export class DashboardComponent implements OnInit {

    users: User[];

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.getUsers();
    }

    getUsers(): void {
        this.userService.getUsers().then(
            users => this.users = users.slice(1, 5)
        );
    }

}

