import { Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';

@Injectable()
export class BcryptService {
  async hashPassword(password: string) {
    const saltRounds = 12;
    return await hash(password, saltRounds);
  }

  async comparePassword(password: string, comparedPassword: string) {
    return await compare(password, comparedPassword);
  }
}
