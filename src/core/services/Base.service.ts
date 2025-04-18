import axios, { AxiosInstance } from "axios";
import { AUTH } from "../constants/endpoints";



class BaseService {
  protected apiClient: AxiosInstance;
  protected timeout: number = 1000000;

  constructor(baseURL: string) {
    this.apiClient = axios.create({
      baseURL: baseURL,
      timeout: this.timeout,
    });

    this.initializeRequestInterceptor();
    this.initializeResponseInterceptor();
  }

  private initializeRequestInterceptor() {
    this.apiClient.interceptors.request.use(
      (config) => {
        switch (config.url) {
          case `${AUTH.LOGIN}`:
            config = config;
            break;
          default:
            case `${AUTH.LOGIN}`:
            // this.handleToken(config);
        }
        return config;
      },
      (error) => {
        console.error('Errore nella richiesta:', error);
        return Promise.reject(error);
      }
    );
  }

  private initializeResponseInterceptor() {
    this.apiClient.interceptors.response.use(
      (response) => {
        // TODO: toast
        // const message = handleMessages(response.config);
        // if (message) {
        //   toast.success(message, { autoClose: 1000 });
        // }
        return response;
      },
      (error) => {
        let messageError: string = 'Server error';
        if (error.response) {
          console.error('Errore nella risposta del server:', error.response);
          if (typeof error.response.data.detail === 'string')
            messageError = error.response.data.detail;
          else 
            messageError = messageError; 
        } else if (error.request) {
          console.error('Nessuna risposta ricevuta dal server:', error.request);
        } else {
          console.error('Errore nella configurazione della richiesta:', error.message);
        }
        
        // toast.error(messageError, { autoClose: 1000 });
        return Promise.reject(error);
      }
    );
  }

  // private handleRedirect() {
    //console.log('Redirect to login page:::');
    // clearStorage();
    // emitter.emit('logout')
  //}

  //private handleToken(config: InternalAxiosRequestConfig<any>) {
    // TODO: token
    // const token: string | null = localStorage.getItem('access_token');
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    //   const jwt: JwtPayload = jwtDecode(token);
    //   if (jwt.exp! * 1000 < new Date().getTime()) {
    //     this.handleRedirect();
    //   }
    // }
    // if (!token) {
    //   this.handleRedirect();
    // }
  //}
}

export default BaseService;
