import {Component, Output, EventEmitter, OnChanges, SimpleChanges, Input, ViewChild} from '@angular/core';
import { User } from '../../services/user/user';
import { UserService } from '../../services/user/user.service';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html'
})

export class UserFormComponent implements OnChanges {

    @Input() user: User;
    @Output() onSubmitted = new EventEmitter<User>();

    @ViewChild('userForm') form: any;

    public states = [{key: true, label: 'Yes'}, {key: false, label: 'No'}];
    public submitted = false;

    public model  = new User(null, null, null, true);

    constructor (private userService: UserService) {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.user) {
            this.model = this.user;
        }
    }

    onSubmit() {

        if (typeof this.model.is_active === 'string') { // form sends string "false" TODO: find solution
            this.model.is_active = JSON.parse(this.model.is_active);
        }

        this.submitted = true;
        if (!this.user) {
            this.userService.addUser(this.model).then(user => {
                this.onSubmitted.emit(user);
                this.form.reset();
            });
        } else {
            this.userService.updateUser(this.model).then(user => {this.onSubmitted.emit(user); } );
        }
    }

    // get diagnostic() {return JSON.stringify(this.model)}

}
