import { Injectable } from '@nestjs/common';

type User = {
  id: string;
  email: string;
  password: string;
  name: string;
  provider: string;
};

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: '1',
      email: 'user1@gmail.com',
      password: 'password',
      name: 'User One',
      provider: 'credentials',
    },
    {
      id: '2',
      email: 'user2@gmail.com',
      password: 'password',
      name: 'User Two',
      provider: 'credentials',
    },
  ];

  constructor() {}

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => (user.email = email));
  }
}
