export class User {
    constructor (user = null) {
        this.id = undefined;
        this.username = undefined;
        this.email = undefined;
        this.password = undefined;

        if (user) {
            Object.assign(this, user);
        }
    }
}