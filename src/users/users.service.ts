import { Injectable } from "@nestjs/common";





export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userID: 1,
            username: 'teste',
            password: '123',
        },
        {
            userID: 2,
            username: 'teste2',
            password: '456',
        }
    ];
    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}

