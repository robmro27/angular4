import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import {UserSearchService} from '../../services/user/user-search.service';
import {User} from '../../services/user/user';

@Component({
    selector: 'user-search',
    templateUrl: './user-search.component.html',
    providers: [UserSearchService]
})

export class UserSearchComponent implements OnInit {

    users: Observable<User[]>;
    private searchTerms = new Subject<string>();

    constructor(private userSearchService: UserSearchService, private router: Router) {}

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.users = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term ? this.userSearchService.search(term) : Observable.of<User[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<User[]>([]);
            })
    }

    goToDetail(user: User): void {
        let link = ['/user', user.id];
        this.router.navigate(link).then();
    }
}