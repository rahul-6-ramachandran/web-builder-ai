import { AxiosError } from "axios";
import Axios from "../../config/axios";
import { CreateUser, UserDetails } from "../../types.dto";

// @ts-ignore
import { onError } from "../../components/Notifications/Notify";
import { decodeJWT } from "../../utils/utils";

// Login
export const signIn = async (
  user: CreateUser,
  setUser: (u: UserDetails) => void
) => {
  try {
    const { data } = await Axios.post("api/auth/login", user);
    // const token = data.access_token

    const decodedToken = await decodeJWT(data.access_token);

    console.log(decodedToken, "decodedToken");

 
    localStorage.setItem("token", data.access_token)
    setUser(decodedToken);

    return data;
  } catch (error) {
    const err = error as AxiosError;
    return err;
  }
};

// Signup
export const signUp = async (
  user: CreateUser,
  setUser: (u: string) => void
) => {
  try {
    const { data } = await Axios.post("api/auth/signup", user);
   
    console.log(data, "token");
    localStorage.setItem("token", data.access_token)
    setUser(data?.access_token);

    return data;
  } catch (error) {
    const err = error as AxiosError;

    if (err.response?.data) {
      const serverError = err.response?.data || "An unexpected error occurred";
      console.error("Sign Up Error:", serverError);
      onError(serverError);
    }

    return {
      //   error: serverError,
      status: err.response?.status,
    };
  }
};

// logout
export const logout = (setUser: (u: UserDetails | null) => void) => {
  try {
    localStorage.removeItem("userInfo");
    setUser(null);
    return true;
  } catch (error) {
    const err = error as AxiosError;
    console.error(err);
    return false;
  }
};
