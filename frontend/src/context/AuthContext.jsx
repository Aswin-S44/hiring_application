import React, { createContext, useContext, useEffect, useState } from "react";
import baseUrl from "../contants/baseUrl";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // user + profile
  const [loading, setLoading] = useState(true); // app-level loading
  const [profile, setProfile] = useState(null);

  const token = localStorage.getItem("token");

  // 🔐 Fetch user using token
  const fetchUser = async () => {
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${baseUrl}/api/v1/auth/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (data.success) {
        if (data.user) {
          setUser(data.user);
        }

        if (data.profile) {
          setProfile(data.profile);
        }
      } else {
        logout();
      }
    } catch (error) {
      console.error("Auth error:", error);
      logout();
    } finally {
      setLoading(false);
    }
  };

  // 🔁 Run once on app load
  useEffect(() => {
    fetchUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        logout,
        refetchUser: fetchUser,
        profile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => useContext(AuthContext);
