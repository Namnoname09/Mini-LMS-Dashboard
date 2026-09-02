import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { User } from "../types/user";

interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const MOCK_USER: User = {
  id: "u1",
  name: "Demo Student",
  email: "student@example.com",
};
const MOCK_PASSWORD = "123456";
const STORAGE_KEY = "lms_auth_user";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    if (email === MOCK_USER.email && password === MOCK_PASSWORD) {
      setUser(MOCK_USER);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(MOCK_USER));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
