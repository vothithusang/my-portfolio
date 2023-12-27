import axios from "axios";
// import { jwtVerification } from '~/utils/jwt-verification';
// import History from './navigate.service';
// import TokenService from './token.service';
// import { signOut } from './auth.service';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // baseURL: "https://qa-nexthcm-api.banvien.com.vn/gatewayapp",
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "KR",
  },
});

instance.interceptors.request.use(
  (config) => {
    if (
      config.url === "https://dev-pixelai-bucket.kr.object.ncloudstorage.com/"
    ) {
      config.headers!["Authorization"] = undefined;
      return config;
    }
    // const token = TokenService.getLocalAccessToken();
    const token = "124";
    // if (token && jwtVerification(token)) {
    if (token) {
      config.headers!["Authorization"] = "Bearer "; //+ token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (originalConfig.url !== "/auth/check-social" && err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          //   const refreshToken = TokenService.getLocalRefreshToken();
          //   if (refreshToken && jwtVerification(refreshToken)) {
          //     const rs = await axios.get(
          //       import.meta.env.VITE_API_URL + '/auth/refresh-token',
          //       {
          //         headers: {
          //           Authorization: 'Bearer ' + refreshToken,
          //         },
          //       },
          //     );
          //     const { data } = rs.data;
          //     // verifation exp token
          //     if (data && jwtVerification(data.accessToken)) {
          //       TokenService.setAuth(data.accessToken);
          //     } else {
          //       //check user has status blocked
          //       if (verificationUserIsBlocked(data.accessToken) == false) {
          //         TokenService.removeAuth(); // if user don't has status blocked -> logout
          //       } else {
          //         TokenService.removeAccBlock() // user has status is blocked -> set status = block and show modal
          //       }
          //       History.push('/home-page');
          //     }
          //     return instance(originalConfig);
          //   } else {
          //     TokenService.removeAuth();
          //     signOut()
          //     History.push('/home-page');
          //     return Promise.reject();
          //   }
        } catch (_error) {
          //   if (verificationUserIsBlocked() == false) {
          //     TokenService.removeAuth();
          //   } else {
          //     TokenService.removeAccBlock()
          //   }
          //   signOut()
          //   History.push('/home-page');
          return Promise.resolve(_error);
        }
      }
    }
    return Promise.reject(err?.response?.data?.error);
  }
);

export default instance;
