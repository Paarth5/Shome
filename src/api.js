import axios from "axios";
const loginUser = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const user = {
    username: formData.get("username"),
    password: formData.get("password"),
  };
  try {
    const response = await axios.post("http://localhost:3001/login", user);
    console.log(response.data);
    const authToken = response.data.token;
    localStorage.setItem("authToken", authToken);
  } catch (error) {
    console.error("Login failed:", error.message);
  }
  // window.location.href = "/";
};

const registerUser = async (e) => {
  e.preventDefault();
  try {
    const formData = new FormData(e.target);
    const user = {
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      username: formData.get("username"),
      password: formData.get("password"),
    };
    const response = await axios.post("http://localhost:3001/register", user);
    console.log(response.data);
  } catch (error) {
    console.error("Registeration failed:", error.message);
  }
  // window.location.href = "/";
};

export { loginUser, registerUser };
