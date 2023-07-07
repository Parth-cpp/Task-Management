import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async createUser(_authCredentialsDto: AuthCredentialsDto): Promise<void> {
    // const { username, password } = authCredentialsDto;
    // const user = this.create({ username, password });
    // await this.save(user);
    return;
  }
}
