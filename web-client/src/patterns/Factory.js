export class User {
    constructor(role, name) {
        this.role = role;
        this.name = name;
    }
}

export class UserFactory {
    static createUser(role, name) {
        return new User(role, name);
    }
}
