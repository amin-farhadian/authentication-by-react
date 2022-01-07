import { useContext } from "react";

export default function useAuthContext(context) {
  const newContext = useContext(context);

  if (!newContext) {
    throw new Error("Context can't be used without a Provider!");
  }

  return newContext;
}
