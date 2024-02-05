import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "./ActionType";
import axios from "axios";
import Swal from "sweetalert2";

export const login = (username, password) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("grant_type", "password");
    formData.append("client_id", "e78869f77986684a");
    formData.append("client_secret", "0a40f69db4e5fd2f4ac65a090f31b823");
    formData.append("username", username);
    formData.append("password", password);

    const response = await axios.post(
      "https://soal.staging.id/oauth/token",
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    if (response.status === 200) {
      const token = response.data.access_token;
      sessionStorage.setItem("token", token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data.user,
      });
    } else {
      dispatch({
        type: LOGIN_FAILURE,
        payload: response.data.error,
      });
    }
  } catch (error) {
    console.error("Login failed:", error);
    Swal.fire({
      icon: "error",
      title: error.response.status,
      text: error.response.data.message,
      footer: error.message,
    });
    dispatch({
      type: LOGIN_FAILURE,
      payload: "An error occurred during login",
    });
  }
};
