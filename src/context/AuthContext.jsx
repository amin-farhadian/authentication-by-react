import { createContext, useReducer } from "react";
import useAuthContext from "../customHooks/useAuthContext";
import { initState, reducer } from "./reducer";

const AuthStateContext = createContext();

const AuthDispatcherContext = createContext();

export const useAuthStateContext = () => {
  return useAuthContext(AuthStateContext);
};

export const useAuthDispatcherContext = () => {
  return useAuthContext(AuthDispatcherContext);
};

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatcherContext.Provider value={dispatch}>
        {children}
      </AuthDispatcherContext.Provider>
    </AuthStateContext.Provider>
  );
}
