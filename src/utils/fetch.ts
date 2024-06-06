/**
 *  @description request 请求封装
 *  @author jinyin.du
 */
const codeMessage: any = {
  200: "服务器成功返回请求的数据。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
};
const checkStatus = (response: any) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errortext = codeMessage[response.status] || response.statusText;
  const error: any = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
};

const request = async (url: string, method: string, data: any) => {
  const opts: any = {
    method,
    headers: {
      'Cache-Control': 'no-cache', 
      "Content-Type":
        method == "POST"
          ? "application/json; charset=utf-8"
          : "application/x-www-form-urlencoded;charset=utf-8",
    },
    cache: 'no-store'
  };
  if (method == "POST") {
    opts.body = JSON.stringify(data);
  }
  return fetch(url, opts)
    .then(checkStatus)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return {
        errcode: "-1",
        errmsg: "服务在开小差，请稍等" + err,
      };
    });
};

const Get = (url: string, data?: any) => {
  return request(url, "GET", data);
};

const Post = (url: string, data: any) => {
  return request(url, "POST", data);
};

const Put = (url: string, data: any) => {
  return request(url, "PUT", data);
};

export { Get, Post };
