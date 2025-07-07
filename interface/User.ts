export interface LoginCredentials {
  email: string;
  password: string;
}

export interface UserData {
    email: string | null;
    password: string | null;
    name: string;
    role: string;
}