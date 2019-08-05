import { post, get } from 'axios';
import { User } from '../models/user';

export class UsersSerivce {
    constructor () {
        this.url = 'https://project-a1-c25d6.firebaseio.com/'
    }
    async registerUser (user) {
        const response = await post(`${this.url}/users.json`, user);
        return response;
    }

    async getMembers () {
        let members = [];
        const response = await get(`${this.url}/users.json`);
        // eslint-disable-next-line no-console
        console.log(response);
        if (response.data) {
            Object.keys(response.data).forEach((userId) => {
                let user = new User(response.data[userId]);
                user.id = userId;
                members.push(user);
            });
        }
        // eslint-disable-next-line no-console
        console.log(members);
        return members;
    }
}