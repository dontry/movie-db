import axios, { Canceler, AxiosResponse } from "axios";

let cancel: Canceler;
const promiseArray: any = {};
const CancelToken = axios.CancelToken;

console.log(`BASE_URL: ${process.env.BASE_URL}`);

let HOME_URL: string = "http://localhost:3000";

const options = {
  baseURL: `${process.env.BASE_URL}`,
  headers: { "X-Requested-With": "XMLHttpRequest" },
  timeout: 10000
};

const httpClient = axios.create(options);

httpClient.interceptors.request.use(
  (config: any) => {
    // cancel previous same request
    if (promiseArray[config.url]) {
      promiseArray[config.url]("Cancel");
      promiseArray[config.url] = cancel;
    } else {
      promiseArray[config.url] = cancel;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(response => {
  if (/^2\w/.test(response.status.toString())) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(response);
  }
});

class ClientAPI {
  private requestToken: string;
  private accessToken: string;
  constructor() {
    this.requestToken = "";
    this.accessToken = "";
  }

  public setRequestToken(token: string): void {
    this.requestToken = token;
  }

  public setAccessToken(token: string): void {
    this.accessToken = token;
  }

  public authenticate() {
    this.get(`/authenticate/${this.requestToken}?redirect_to=${HOME_URL}`);
  }

  public get(url: string, params?: any): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      httpClient({
        method: "get",
        url,
        params: { ...params, requestToken: this.requestToken },
        cancelToken: new CancelToken(c => {
          cancel = c;
        })
      }).then(response => {
        resolve(response);
      });
    });
  }

  public post(url: string, payload: any): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      httpClient({
        method: "post",
        url,
        data: payload,
        cancelToken: new CancelToken(c => {
          cancel = c;
        })
      }).then(response => {
        resolve(response);
      });
    });
  }

  public delete(url: string, params?: any): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      httpClient({
        method: "delete",
        url,
        params,
        cancelToken: new CancelToken(c => {
          cancel = c;
        })
      }).then(response => {
        resolve(response);
      });
    });
  }

  public put(url: string, payload: any): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      httpClient({
        method: "put",
        url,
        data: payload,
        cancelToken: new CancelToken(c => {
          cancel = c;
        })
      }).then(response => {
        resolve(response);
      });
    });
  }
}

export const clientAPI = new ClientAPI();
