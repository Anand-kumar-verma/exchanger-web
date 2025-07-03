import axios from "axios";
import toast from "react-hot-toast";
// import { frontend } from "./APIRoutes";
// import toast from "react-hot-toast";

export const apiConnectorGet = async (endpoint, params) => {
  try {
    const response = await axios?.get(
      endpoint,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("logindataen")}`,
        },
      },
      {
        params: params,
      }
    );
    if (response?.data?.message === "Invalid logindataen.") {
      toast("Login in another device ", { id: 1 });
      localStorage.clear();
    //   window.location.href = `${frontend}`;
      return;
    }
    return response;
  } catch (e) {
    return {
      message: e?.message,
    };
  }
};
export const apiConnectorGetWithoutToken = async (endpoint, params, token) => {
  try {
    const response = await axios?.get(
      endpoint,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      {
        params: params,
      }
    );
    if (response?.data?.message === "Invalid logindataen.") {
      toast("Login in another device ", { id: 1 });
      localStorage.clear();
    //   window.location.href = `${frontend}`;
      return;
    }
    return response;
  } catch (e) {
    return {
      message: e?.message,
    };
  }
};
export const apiConnectorPost = async (endpoint, reqBody) => {
  try {
    const response = await axios?.post(endpoint, reqBody, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("logindataen")}`,
      },
    });
    if (response?.data?.message === "Invalid logindataen.") {
      toast("Login in another device ", { id: 1 });
      localStorage.clear();
    //   window.location.href = `${frontend}`;
      return;
    }
    return response;
  } catch (e) {
    return {
      message: e?.message,
    };
  }
};
export const apiConnectorPostWithdouToken = async (
  endpoint,
  reqBody,
  token
) => {
  try {
    const response = await axios?.post(endpoint, reqBody, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response?.data?.message === "Invalid logindataen.") {
      toast("Login in another device ", { id: 1 });
      localStorage.clear();
    //   window.location.href = `${frontend}`;
      return;
    }
    return response;
  } catch (e) {
    return {
      message: e?.message,
    };
  }
};
