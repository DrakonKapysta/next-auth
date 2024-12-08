export class UserDTO {
  public id: string;
  public email: string;
  public roles: string[];
  constructor(model: { id: string; email: string; roles: string[] }) {
    this.id = model.id;
    this.email = model.email;
    this.roles = model.roles;
  }
}
