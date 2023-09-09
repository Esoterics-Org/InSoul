type AuthActions = "LOGIN" | "LOGOUT";

interface User {
  id: string;
  email: string;
  password: string;
  username?: string;
  communityId?: string;
}

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
}

interface AuthAction {
  type: AuthActions;
  payload: User | null;
}

interface UserRegister {
  email: string;
  password: string;
  communityId: string;
}

interface UserLogin {
  identifier: string;
  password: string;
}

export type { User, AuthState, AuthAction, UserRegister, UserLogin };
