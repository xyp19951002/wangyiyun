import axios from "axios";

const instance = axios.create({
  baseURL: "http://10.31.162.85:4000",
  // 请求超过10秒，则报错
  timeout: 10000
});

// ---------------------------------------------------
//请求前加入token
// 添加请求拦截器（每次发送请求前统一做的事情）
instance.interceptors.request.use(
  config => {
    // console.log(config);
    if (localStorage.getItem("token")) {
      // 请求数据里加 token
      // if (config.method === "get") {
      //   config.params.token = localStorage.getItem("token");
      // } else if (config.method === "post") {
      //   config.data.token = localStorage.getItem("token");
      // }

      // 请求头里加token
      config.headers.token = localStorage.getItem("token");
    }
    // 在发送请求之前做些什么
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
// ----------------------------------------------------

// -----------------------------------------------------
// 请求数据成功后什么都不做，直接返回数据。
// 添加响应拦截器(每次成功以后统一做的事情)
instance.interceptors.response.use(
  response => {
    // console.log(response);
    // 对响应数据做点什么
    return response.data;
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
// --------------------------------------------------------

const http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      return instance
        .get(url, {
          params: params || {}
        })
        .then(res => {
          if (res.status === "0") {
            resolve(res);
          } else {
            console.log(res.msg);
          }
        })
        .catch(err => {
          console.log(err.message);
          reject(err);
        });
    });
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      return instance
        .post(url, params)
        .then(res => {
          if (res.status === "0") {
            resolve(res);
          } else {
            console.log(res.msg);
          }
        })
        .catch(err => {
          console.log(err.message);
          reject(err);
        });
    });
  }
};

export default http;
