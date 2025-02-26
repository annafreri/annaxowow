export type Role = 'boss' | 'developer' | 'designer' | 'intern';

export interface User {
  id: string;
  name: string;
  role: Role;
  email: string;
  profilePicture: string;
  phoneNumber?: string;
}