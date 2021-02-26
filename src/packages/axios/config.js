/** 请求头配置 */
export const headers = {
  "Content-Type": "application/json; charset=UTF-8"
};
/** 请求超时时间 */
export const timeOut = 5000;
/** 请求被当作成功的状态码范围 */
export const validateStatus = status => status >= 200 && status < 300;
