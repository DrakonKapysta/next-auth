class UserDTO {
  public id: string;
  public email: string;
  public roles: string[];
  constructor(model: { id: string; email: string; roles: string[] }) {
    this.id = model.id;
    this.email = model.email;
    this.roles = model.roles;
  }
}

class Session {
  private user: UserDTO | null = null;
  async sessionLoginEmail(email: string, password: string) {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    const userData = new UserDTO(data.user);

    this.user = userData;

    return { user: { ...userData } };
  }

  getSession() {
    return this.user;
  }
}

const session = new Session();

export default session;
