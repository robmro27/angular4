import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {User} from './user';

@Injectable()
export class UserSearchService {

    constructor(private http: Http) {}

    search(term?: string): Observable<User[]> {
        const url =  (term) ? `api/users?name=${term}` : `api/users`;
        return this.http
            .get(url)
            .map(response => response.json().data as User[]);

    }
}
