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
            ['Active',     10],
            ['InActive', 50]
        ],
        options: {
            'title': 'Users',
            is3D: true,
            slices: {
                0: { color: '#593196' },
                1: { color: '#A991D4' }
            },
            width: '400',
            height: '400',
        },
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

