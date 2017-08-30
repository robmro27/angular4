import {Component, OnInit, AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';

import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/distinctUntilChanged';

import {UserSearchService} from '../../services/user/user-search.service';
import {UserService} from '../../services/user/user.service';
import {User} from '../../services/user/user';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    providers: [UserSearchService, UserService]
})

export class UsersComponent implements OnInit, AfterViewInit {

    public users: Observable<User[]>;
    public selectedUser: User;
    public loading = false;
    private searchTerms = new Subject<string>();


    constructor(private userSearchService: UserSearchService, private router: Router) {}

    onSelect(user: User): void {
        this.selectedUser = user;
    }

    search(term?: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {

        this.users = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .do( () => this.loading = true)
            .switchMap(term => term ? this.userSearchService.search(term) : this.userSearchService.search())
            .do( () => this.loading = false)
            .catch(error => {
                console.log(error);
                return Observable.of<User[]>([]);
            });
    }

    ngAfterViewInit(): void {
        this.search();
    }

    goToDetail(user: User): void {
        const link = ['/user', user.id];
        this.router.navigate(link).then();
    }
}
