import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from '../../services/user/user';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    pieChartData =  {
        chartType: 'PieChart',
        dataTable: [
            ['User Status', 'Active/InActive'],
            ['Active',     50],
            ['InActive', 50],force
            
        ],
        options: {'title': 'Users'},
    };

    users: User[];

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.getUsers();
    }

    getUsers(): void {
        this.userService.getUsers().then(
            users => {
                this.users = users.slice(0, 4);
            }
        );
    }

}

