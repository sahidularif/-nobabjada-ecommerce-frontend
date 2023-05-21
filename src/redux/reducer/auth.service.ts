import axios from 'axios';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import jwt_decode from 'jwt-decode';
import { auth, googleProvider } from '../../firebase/firebaseConfig';
import { DecodedJwt } from '../models/DecodedJwt.interface';
import { DisplayUser } from '../models/DisplayUser.interface';
import { Jwt } from '../models/Jwt';
import { LoginUser } from '../models/LoginUser.interface';
import { NewUser } from '../models/NewUser';

//Base Url
// const API_URL = "https://gleaming-puce-pullover.cyclic.app/auth/"
const API_URL = "http://localhost:5000/auth/"

// User Registration
const register = async (newUser: NewUser): Promise<DisplayUser | null> => {
  const response = await axios.post(API_URL + "register", newUser);

  return response.data;
};


// User Login
const login = async (user: LoginUser): Promise<{ jwt: Jwt; user: DisplayUser | null }> => {
  const response = await axios.post(API_URL + "login", user);
  const token = {token: response.data.token}
  if (response.data) {
    
    localStorage.setItem('jwt', JSON.stringify(token));
    // console.log(response.data)
    const decodedJwt: DecodedJwt = jwt_decode(response.data.token);
    // console.log(decodedJwt)
    localStorage.setItem('user', JSON.stringify(decodedJwt.user));
    return { jwt: response.data.token, user: decodedJwt.user };
  }
  return { jwt: token, user: null };
};


// Google signin
const googleLogin = async (): Promise<{ jwt: Jwt; user: DisplayUser | null }> => {
  try {
    const res = await signInWithPopup(auth, googleProvider)
      .then((result) => {
        return result
      })
    const credential = GoogleAuthProvider.credentialFromResult(res)
    const token = {
      token: credential?.accessToken
    }
    const user = {
      id: res.user.uid,
      email: res.user.email,
      name: res.user.displayName,
      isAdmin: false,
    }
    localStorage.setItem('jwt', JSON.stringify(token))
    localStorage.setItem('user', JSON.stringify(user))
    return {
      jwt: token,
      user: user,
    }

  } catch (error) {
    return { jwt: null, user: null }
  }
};


// User Logout
const logout = (): void => {
  localStorage.removeItem('user');
  localStorage.removeItem('jwt');
};


// Jwt Verification
const verifyJwt = async (jwt: string): Promise<boolean> => {
  const response = await axios.post(
    API_URL + "verify-jwt",
    { jwt }
  );

  if (response.data) {
    const jwtExpirationMs = response.data.exp * 1000;
    if(jwtExpirationMs < Date.now()){
      localStorage.removeItem('jwt')
      localStorage.removeItem('user')
    }
    return jwtExpirationMs > Date.now();
  }

  return false;
};

const authService = {
  register,
  login,
  googleLogin,
  logout,
  verifyJwt,
};

export default authService;
