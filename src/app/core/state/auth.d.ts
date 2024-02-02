export interface AuthInfo {
  isAuthenticated: boolean;
  userData: UserData;
  accessToken: string;
  idToken: string;
  configId: string;
}

export interface UserData {
  sub: string;
  preferred_username: string;
  name: string;
}
