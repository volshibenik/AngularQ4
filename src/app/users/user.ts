import { UserModel } from './user.model';

export class User implements UserModel {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
  ) {}
}
