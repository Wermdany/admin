import axios from "axios";
import { ENV } from "@/utils/env";
import { headers, timeOut, validateStatus } from "@/packages/axios/config";
import store from "@/store";
import { urlQueryKey } from "@/locales/config";

// 公共请求基地址
const VUE_APP_HTTP_BASE_URL = ENV.VUE_APP_HTTP_BASE_URL;
// 次级运行环境
const VUE_APP_RUN_ENV = ENV.VUE_APP_RUN_ENV;

const A = axios.create({
  baseURL: VUE_APP_HTTP_BASE_URL,
  headers,
  //断点调试时，改为 无限时间 即为 0
  timeout: VUE_APP_RUN_ENV.indexOf("dev") == -1 ? 0 : timeOut,
  validateStatus: validateStatus
});

//请求拦截
A.interceptors.request.use(config => {
  config.headers[urlQueryKey] = store.state.locale.lang;
  return config;
});

//响应拦截
A.interceptors.response.use(
  response => {
    // restful 状态码 200-300
    const { data } = response;
    if (data.code != 200) {
      //给出提示
    }
    return data;
  },
  error => {
    // restful 状态码 其他 一般是 网络错误或服务器错误
    const errorJSON = {
      errMsg: error.message,
      name: error.name,
      config: error.config,
      stack: error.stack
    };
    // 给出提示
    return Promise.reject(errorJSON);
  }
);

export default function({ url = "", data = {}, method = "get", options = {} }) {
  const config = { ...options };
  config.method = method.toLocaleUpperCase();
  config.url = url;
  config.method === "GET" ? (config.params = data) : (config.data = data);
  return new Promise(resolve => {
    A(config)
      .then(result => {
        if (result.code == 200) {
          resolve([result.data, null]);
        } else {
          resolve([null, result]);
        }
      })
      .catch(() => {
        resolve([null, null]);
      });
  });
}
