import axios from "axios";

const API_URL = "https://ticket-booking-app-server-production.up.railway.app";

const signup = (fullName, email, password,mobileNumber) => {
  return axios
    .post(API_URL + "/register", {
      email,
      password,
      fullName,
      mobileNumber
    })
    .then((response) => {
      
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      
      return response.data;
    });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      console.log(response.data)
      return response.data;
    });
};

const logout = () => {
  console.log('item removed')
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;