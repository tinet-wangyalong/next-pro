import { Injectable } from '@nestjs/common';
import { UserDto } from './dto';

@Injectable()
export class UsersService {
  private readonly users: UserDto[] = [
    {
      id: 'demo-user-1',
      name: '演示用户',
      email: 'demo@example.com',
    },
  ];

  findAll(): UserDto[] {
    return this.users;
  }
}
