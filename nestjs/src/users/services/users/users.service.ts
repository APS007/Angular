import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private fakeUsers = [{name: 'John Doe', age: 30}, {name: 'Jane Doe', age: 28}];
    fetchUsers() {
        return this.fakeUsers;
    }
}
