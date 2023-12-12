import { Injectable } from '@nestjs/common';
import { User, UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<Omit<User, 'password'> | null> {
    const user = await this.userService.findOne(email);
    if (user.password === password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
