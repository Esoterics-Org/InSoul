import { useReducer, useMemo, Reducer } from "react";
import { LOGIN, LOGOUT } from "./actions/auth";
import type {
  AuthAction,
  AuthState,
  User,
  UserLogin,
  UserRegister,
} from "../global/interfaces/authContext";
import AuthContext from "./AuthContext";

const initialAuthState: AuthState = {
  user: JSON.parse(localStorage.getItem("user")!) as User,
  isLoggedIn: !!localStorage.getItem("user"),
};

const authStateReducer: Reducer<AuthState, AuthAction> = (state, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    }
    default:
      return initialAuthState;
  }
};

const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authStateReducer, initialAuthState);

  const handleRegister = async (payload: UserRegister) => {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND}/api/v1/auth/register`,
      {
        method: "POST",
        credentials: "include",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    const data = await response.json();
    return data;
  };

  const handleLogin = async (payload: UserLogin) => {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND}/api/v1/auth/login`,
      {
        method: "POST",
        credentials: "include",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    const data = await response.json();
    if (response.status === 200) {
      localStorage.setItem("user", JSON.stringify(data.message));
      dispatch({
        type: LOGIN,
        payload: data.message,
      });
    }
    return data;
  };

  const handleLogout = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND}/api/v1/auth/logout`,
      {
        credentials: "include",
      }
    );
    const data = await response.json();
    localStorage.removeItem("user");
    dispatch({ type: LOGOUT, payload: null });
    return data;
  };

  const authctxMemo = useMemo(() => {
    return {
      user: authState.user,
      isLoggedIn: authState.isLoggedIn,
      login: handleLogin,
      logout: handleLogout,
      register: handleRegister,
    };
  }, [authState]);

  return (
    <AuthContext.Provider value={authctxMemo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
