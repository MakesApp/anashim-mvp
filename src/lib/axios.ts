import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios';
import { BASE_URL } from '@api/apiConstants';

const getData = (res: AxiosResponse<unknown>) => res.data;

let api: AxiosInstance | undefined;

interface InitOptions {
  baseURL?: string;
  axiosOptions?: AxiosRequestConfig;
}
interface ExtendedAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

function init({
  baseURL = BASE_URL,
  axiosOptions = { headers: {} },
}: InitOptions = {}): void {
  api = axios.create({
    baseURL,
    ...axiosOptions,
    withCredentials: true,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token: string | null = window.localStorage.getItem('token');
      config.headers = config.headers || {};
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config as InternalAxiosRequestConfig;
    },
    (error: AxiosError) => Promise.reject(error),
  );

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      if (
        error.response &&
        error.response.status === 401 &&
        !(error?.config as ExtendedAxiosRequestConfig)._retry
      ) {
        localStorage.removeItem('token');
      }
      return Promise.reject(error);
    },
  );
}

export { init, api, getData };
