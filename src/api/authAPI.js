import axios from "axios";
import Cookie from "js-cookie";

const url = "http://localhost:8000/rescueGroupAPI"


const authAPI = { }

authAPI.tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall()
    console.log("RESPONSE:", response)
    console.log("RESPONSE DATA:", response.data)
    return response.data ? response.data : { message: "success" }
  }
  catch (e) {
    console.error("error", e.response ? e.response.data : e)
    return null
  }
}

authAPI.getCsrtConfig = () => {
  return {
    withCredentials: true,
    headers:{
      'X-CSRFToken': Cookie.get("csrftoken")
    }
  }
}

authAPI.login = async (loginData) => {
  return await authAPI.tryCatchFetch(() => axios.post(`${url}/login/`, loginData, authAPI.getCsrtConfig()))
}

authAPI.signup = async (signupData) => {
  return await authAPI.tryCatchFetch(() => axios.post(`${url}/users/`, signupData, authAPI.getCsrtConfig()))
}

authAPI.bookmark = async (bookmarkData) => {
  return await authAPI.tryCatchFetch(() => axios.post(`${url}/bookmarks/`, bookmarkData, authAPI.getCsrtConfig()))
}

authAPI.bookmark = async (username) => {
  return await authAPI.tryCatchFetch(() => axios.get(`${url}/user_data/${username}/`, authAPI.getCsrtConfig()))
}

export default authAPI