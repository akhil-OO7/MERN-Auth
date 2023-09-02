import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState();
  const [isLoading, setisLoading] = useState();
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setisLoading(true);
    setError(null);
    const response = await fetch("http://localhost:5500/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      setisLoading(false);
    }
    if (response.ok) {
      // save user to local storage
      localStorage.setItem("user", JSON.stringify(json));
      // dispatch to authContext
      dispatch({ type: "LOGIN", payload: json });

      setisLoading(false);
    }
  };
  return { login, isLoading, error };
};
