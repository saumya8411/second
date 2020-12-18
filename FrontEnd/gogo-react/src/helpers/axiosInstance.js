import axios from "axios";


// export const axiosInstance = () => axios.create({
//   baseURL: process.env.REACT_APP_BACKEND_URL,
//   headers: {
//     Authorization:`Bearer ${localStorage.token}`,
//   }
// })

// baseURL: process.env.REACT_APP_BACKEND_URL,


const Instance = axios.create({
  headers: {
    Authorization:`Bearer ${localStorage.token}`,
  }
})

export default Instance;

// export default (history = null) => {
//   const baseURL = process.env.REACT_APP_BACKEND_URL;


//   let headers = {};

//   if (localStorage.token) {
//     headers.Authorization = `Bearer ${localStorage.token}`;
//   }

//   const axiosInstance = axios.create({
//     baseURL: baseURL,
//     headers,
//   });
//   return axiosInstance;
// };