import axios, { Canceler, AxiosResponse } from "axios";

let cancel: Canceler;
const promiseArray: any = {};
const CancelToken = axios.CancelToken;





const options = {
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: { "X-Requested-With": "XMLHttpRequest" },
  timeout: 10000
};

export const httpClient = axios.create(options);

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

export class ClientAPI {
  private requestToken: string | null;
  private accessToken: string | null;
  private apiKey: string | null;
  private sessionID: string | null;
  private accountID: number;
  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.requestToken = null;
    this.accessToken = null;
    this.sessionID = null;
    this.accountID = -1;
  }

  public setRequestToken(token: string): void {
    this.requestToken = token;
  }

  public setAccessToken(token: string): void {
    this.accessToken = token;
  }

  public setSessionID(sessionID: string): void {
    this.sessionID = sessionID;
  }


  public getRequestToken(): string | null {
    return this.requestToken;
  }

  public getAccessToken(): string | null {
    return this.accessToken;
  }

  public getSessionID(): string | null {
    return this.sessionID;
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

  /*
   Step 1: Create a request token
   */
  // https://developers.themoviedb.org/3/authentication/create-request-token
  public async createRequestToken() {
    const res = await this.get(`/authentication/token/new`, { api_key: this.apiKey });
    if (res.data) {
      this.setRequestToken(res.data.request_token);
    }
  }

  /*
    Step 2: Ask the user for permission

    forward your user to https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}
    and ask them to approve the request token

  */



  /*
    Step 3: Create a session ID
    The session ID allows the app to write user data.

    https://developers.themoviedb.org/3/authentication/create-session
  */
  public async createSessionID(): Promise<boolean> {
    const res = await this.post(`/authentication/session/new?api_key=${this.apiKey}`, {
      request_token: this.requestToken
    })
    if (res.data) {
      this.setSessionID(res.data.session_id);
      return true;
    } else {
      return false
    }
  }

  public async createSessionIDWithLogin(username: string, password: string) {
    const res = await this.post("/authentication/token/validate_with_login", {
      username,
      password,
      request_token: this.requestToken
    })

    if (res.data) {
      this.setSessionID(res.data.session_id);
    }
  }

  public async deleteSessionID() {
    this.post(`/authentication/session?api_key=${this.apiKey}`, {
      session_id: this.sessionID
    })
  }

  public async getUserDetail() {
    const res = await this.get(`/account`, { api_key: this.apiKey, session_id: this.sessionID });
    if (res.data) {
      this.accountID = res.data.id;
    }
  }

  public async getWatchList(sortBy: string = "created_at", page: number = 1, language: string = "en-US") {
    const res = await this.get(`/account/${this.accountID}/watchlist/tv`, { api_key: this.apiKey, session_id: this.sessionID, sort_by: sortBy, language, page })
    return res.data;
  }

  // https://developers.themoviedb.org/3/account/add-to-watchlist
  public async addToWatchList(showID: number): Promise<boolean> {
    const res = await this.post(`/account/${this.accountID}/watchlist?api_key=${this.apiKey}`, { media_type: "tv", media_id: showID, watchlist: true })
    // 201 status_code: 1, 401 status_code: 3, 404 status_code: 34
    return res.data.status_code === 1;
  }
}

export const clientAPI = new ClientAPI(process.env.API_KEY || "");
