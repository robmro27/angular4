import { Injectable } from '@angular/core';
import { User } from './user';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

    private usersUrl = 'api/users';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getUsers(): Promise<User[]> {
        return this.http.get(this.usersUrl)
            .toPromise()
            .then(response => response.json().data as User[])
            .catch(this.handleError);
    }

    getUser(id: number): Promise<User> {
        const url = `${this.usersUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as User)
            .catch(this.handleError);
    }

    updateUser(user: User): Promise<User> {
        const url = `${this.usersUrl}/${user.id}`;
        return this.http.put(url, JSON.stringify(user), {headers: this.headers})
            .toPromise()
            .then(() => user)
            .catch(this.handleError);
    }

    addUser(name: string, password: string, email: string): Promise<User> {
        return this.http.post(this.usersUrl, JSON.stringify(
                {   username: name,
                    password: password,
                    email: email,
                    is_active: true
                }), {headers: this.headers})
            .toPromise()
            .then(response => response.json().data as User)
            .catch(this.handleError);
    }

    deleteUser(id: number): Promise<void> {
        const url = `${this.usersUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
