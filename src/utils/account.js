import service from "./service";

/**
* 注册接口
*/
export function SignUp(data) {
  return service.request({
      url: "/register/",
      method: "post",
      data, 
  });
}

/**
* 登录接口
*/
export function Login(data) {
    return service.request({
        url: "/login/",
        method: "post",
        data, 
    });
}

/**
 * 用户信息接口
*/
export function GetAccountInfo(data) {
    return service.request({
            url: "/staff_info/",
            method: "post",     
            data,         
        }
    );
}
