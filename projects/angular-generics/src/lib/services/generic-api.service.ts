import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericApiService {
  constructor(private http: HttpClient) { }

  get<T>(path: string, ...options): Promise<T>;
  get<T>(path: string, id: number | string, ...options): Promise<T> {
    let url = `${path}`;
    if (id) { url = `${url}/${id}`; }

    return new Promise((resolve, reject) => {
      this.http.get(url, ...options)
        .toPromise()
        .then((res: T) => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  post<T>(path: string, body: any): Promise<T>;
  post<T>(path: string, body: any, ...options): Promise<T> {
    const url = `${path}`;

    return new Promise((resolve, reject) => {
      this.http.post(url, body, ...options)
        .toPromise()
        .then(
          (res: T) => { resolve(res); },
          (err) => {
            // let modelErrors = this.parseErrors(err);
            // if (modelErrors) {
            //   console.log('Errors', modelErrors);
            //   this.showValidationErrors(modelErrors);
            //   reject(modelErrors);
            // }
            reject(err);
          });
    });
  }

  put<T>(path: string, body: any): Promise<T>;
  put<T>(path: string, body: any, ...options): Promise<T> {
    const url = `${path}`;

    return new Promise((resolve, reject) => {
      this.http.put(url, body, ...options)
        .toPromise()
        .then(
          (res: T) => { resolve(res); },
          (err) => {
            // let modelErrors = this.parseErrors(err);
            // if (modelErrors) {
            //   console.log('Errors', modelErrors);
            //   this.showValidationErrors(modelErrors);
            //   reject(modelErrors);
            // }
            reject(err);
          });
    });
  }

  delete<T>(path: string, ...options): Promise<T>;
  delete<T>(path: string, id: number | string, ...options): Promise<T> {
    let url = `${path}`;
    if (id) { url = `${url}/${id}`; }

    return new Promise((resolve, reject) => {
      this.http.delete(url, ...options)
        .toPromise()
        .then((res: T) => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  search<T, RT>(path: string, body: T, ...options): Promise<RT> {
    const url = `${path}`;

    return new Promise((resolve, reject) => {
      this.http.post(url, body, ...options)
        .toPromise()
        .then(
          (res: RT) => { resolve(res); },
          (err) => {
            // let modelErrors = this.parseErrors(err);
            // if (modelErrors) {
            //   console.log('Errors', modelErrors);
            //   this.showValidationErrors(modelErrors);
            //   reject(modelErrors);
            // }
            reject(err);
          });
    });
  }


  // private parseErrors(errorResponse: HttpErrorResponse): ModelError[] {
  //   let modelErrors: ModelError[];

  //   if (errorResponse.status === 400 && errorResponse.error) {

  //     if (errorResponse.error.modelState) {
  //       modelErrors = [];

  //       Object.keys(errorResponse.error.modelState).forEach(key => {
  //         let modelError = new ModelError();

  //         let propName = key;
  //         modelError.field = this.toCamelCase(propName.replace('model.', ''));

  //         if (errorResponse.error.modelState[propName][0]) {
  //           modelError.message = errorResponse.error.modelState[propName][0];
  //         }

  //         modelErrors.push(modelError);
  //       });
  //     }
  //   }

  //   return modelErrors;
  // }

  // private toCamelCase(str: string) {
  //   return str.replace(/^([A-Z])|[\s-_]+(\w)/g, function (match, p1, p2, offset) {
  //     if (p2) { return p2.toUpperCase(); }
  //     return p1.toLowerCase();
  //   });
  // }

  // private showValidationErrors(errors: ModelError[]) {
  //   errors.forEach(err => {
  //     console.log('error', err);
  //     this.alertService.addAlert(new Alert({ color: 'red', message: err.message }));
  //   });
  // }

}
