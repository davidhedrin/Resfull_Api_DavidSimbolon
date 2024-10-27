class UserRepository {
    constructor() {
        this.users = [
            {
                id: 1,
                name: 'Anton Sudrajad',
                age: 35,
                job_title: 'IT Programming',
                company: 'PT. Maha Akbar Sejahtera'
            },
            {
                id: 2,
                name: 'David Simbolon',
                age: 24,
                job_title: 'IT Programming',
                company: 'PT. Maha Akbar Sejahtera'
            }
        ]; // Simulasi database
    }

    getAllUsers() {
        return this.users;
    }

    addUser(user) {
        this.users.push(user);
        return user;
    }
}

module.exports = new UserRepository();