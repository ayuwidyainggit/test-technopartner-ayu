import {
  FETCH_MENU_FAILURE,
  FETCH_MENU_REQUEST,
  FETCH_MENU_SUCCESS,
} from "./ActionType";
import axios from "axios";
import Swal from "sweetalert2";

const fetchMenuRequest = () => {
  return {
    type: FETCH_MENU_REQUEST,
  };
};

const fetchMenuSuccess = (data) => {
  return {
    type: FETCH_MENU_SUCCESS,
    payload: data,
  };
};

const fetchMenuFailure = (err) => {
  return {
    type: FETCH_MENU_FAILURE,
    payload: err,
  };
};

export const fetchMenuList = () => async (dispatch) => {
  try {
    dispatch(fetchMenuRequest());

    const token = sessionStorage.getItem("token");
    const response = await axios.post(
      `https://soal.staging.id/api/menu`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(fetchMenuSuccess(response.data));
  } catch (err) {
    dispatch(fetchMenuFailure(err.message));
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
  }
};
