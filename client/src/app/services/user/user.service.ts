import { Injectable } from '@angular/core';
import { User } from './user';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

    private usersUrl = 'api/users';

    constructor(private http: Http) { }

    getUsers(): Promise<User[]> {
        return this.http.get(this.usersUrl)
            .toPromise()
            .then(response => response.json().data as User[])
            .catch(this.handleError);
    }

    getUser(id: number): Promise<User> {
        return this.getUsers().then(users => users.find(user => user.id === id));
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
