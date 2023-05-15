import { AuthContextProvider } from "./AuthContext";

export const GlobalContextUser = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};
