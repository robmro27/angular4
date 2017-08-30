import {Injectable} from '@angular/core';
import {Http, URLSearchParams, RequestOptions, Headers} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {User} from './user';

@Injectable()
export class UserSearchService {

    constructor(private http: Http) {}

    search(terms?: any): Observable<User[]> {

        const url =  `api/users`;
        const headers = new Headers();
        const params = new URLSearchParams();

        headers.append('Content-Type', 'application/json');

        if (terms.searchTerm) {
            params.append('search', terms.searchTerm);
        }

        const options = new RequestOptions({ headers: headers, params: params });

        return this.http
            .get(url, options)
            .map(response => response.json().data as User[]);

    }
}
