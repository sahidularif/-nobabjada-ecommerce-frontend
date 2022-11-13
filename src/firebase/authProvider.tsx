import { signInWithPopup } from "firebase/auth";
import React, {
  createContext, ReactNode, useContext, useState,} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "./firebaseConfig";
// import pic from '../images/product/pd1.png'
  type AuthContextProps = {
   user:{
     email: string | null;
    displayName: string | null;
    photoURL: string | null;
   }
   signInWithGoogle:() => void
  };
  
  type AuthProviderProps = {
    children: ReactNode;
  };
  type AuthUserProps = {
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
  };
export const AuthContextProvider = createContext({} as AuthContextProps);

export function useAuth() {
  return useContext(AuthContextProvider);
}
/* Cart-Provider Component */
export function AuthProvider({ children }: AuthProviderProps) {
  // const navigate = useNavigate();
  const [user, setUser] = useState<AuthUserProps>({
    email: null,
    displayName: null,
    photoURL: null,
  })
  
const signInWithGoogle = async() => {
  // const result = await signInWithPopup(auth, googleProvider)
  // const { email, displayName, photoURL } = result.user;
  //   const user = { email, displayName, photoURL };
    setUser({email: 'sahidularif', displayName:'Sahidul arif', photoURL: '../images/product/pd1.png'});
    console.log(user);
    <Navigate to="/products" />
    
}

  return (
    <AuthContextProvider.Provider
      value={{user, signInWithGoogle}}
    >
      {children}
     
    </AuthContextProvider.Provider>
  );
}

