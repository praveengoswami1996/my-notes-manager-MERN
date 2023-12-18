import axios from "axios";

//let token;
   
export const baseURL = "http://localhost:5000/api/";
export const clientUrl = "http://localhost:3000/";

const api = axios.create({
    withCredentials: true,
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

// export const FileApi = axios.create({
//   withCredentials: true,
//   baseURL,
//   headers: {
//     token: token ? token : getCookie("token"),
//     "Content-Type": "multipart/formdata",
//   },
// });

export const showErrorMessage = (error) => {
  const message = error?.response?.data?.message || error?.message || "Something went wrong";
  toast.error(message);
}

export default api;