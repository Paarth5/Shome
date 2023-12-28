import axios from "axios";
const server_url = "https://shome-server.onrender.com";
const loginUser = async (user) => {
  try {
    const response = await axios.post(`${server_url}/login`, user);
    return response.data;
  } catch (error) {
    console.error("Login failed:", error.message);
    throw error;
  }
};

const registerUser = async (user) => {
  try {
    const response = await axios.post(`${server_url}/register`, user);
    return response.data;
  } catch (error) {
    console.error("Registration failed:", error.message);
    throw error;
  }
};

export { loginUser, registerUser };
