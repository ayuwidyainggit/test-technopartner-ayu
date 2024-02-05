import {
  FETCH_HOME_FAILURE,
  FETCH_HOME_REQUEST,
  FETCH_HOME_SUCCESS,
} from "./ActionType";
import axios from "axios";
import Swal from "sweetalert2";

const fetchHomeRequest = () => {
  return {
    type: FETCH_HOME_REQUEST,
  };
};

const fetchHomeSuccess = (data) => {
  return {
    type: FETCH_HOME_SUCCESS,
    payload: data,
  };
};

const fetchHomeFailure = (err) => {
  return {
    type: FETCH_HOME_FAILURE,
    payload: err,
  };
};

export const fetchHomeList = () => {
  return (dispatch) => {
    dispatch(fetchHomeRequest());

    // Retrieve the token from session storage
    const token = sessionStorage.getItem("token"); // Replace "your_token_key" with the actual key used to store the token

    // Set the token in the request headers
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get("https://soal.staging.id/api/home", axiosConfig)
      .then((res) => {
        let _list = res.data;
        dispatch(fetchHomeSuccess(_list));
      })
      .catch((err) => {
        dispatch(fetchHomeFailure(err.message));

        if (err.message === "Unauthenticated") {
          Swal.fire({
            title: "Error!",
            text: `${err.message}`,
            icon: "warning",
            cancelButtonColor: "#d33",
            confirmButtonText: "OK",
          }).then(() => {
            window.location.href = "/test-technopartner";
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: `${err.message}`,
            icon: "warning",
            cancelButtonColor: "#d33",
            confirmButtonText: "OK",
          }).then(() => {
            window.location.href = "/test-technopartner";
          });
        }
      });
  };
};
