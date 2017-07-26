import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../services/user/user';
import { UserService } from '../../services/user/user.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user.detail.component.html',
    styleUrls: ['./user.detail.component.css']
})

export class UserDetailComponent implements OnInit {

    @Input() user: User;

    constructor(private userService: UserService, private route: ActivatedRoute, private location: Location) {}

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.userService.getUser(+params.get('id')))
            .subscribe(user => this.user = user);
    }

    goBack(): void {
        this.location.back();
    }

}
