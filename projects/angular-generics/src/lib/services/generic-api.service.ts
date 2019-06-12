import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericSearchResponse, GenericSearchRequest } from './generic-search';

@Injectable({
  providedIn: 'root'
})
export class GenericApiService {
  constructor(private http: HttpClient) { }

  get<T>(path: string): Promise<T[]>;
  get<T>(path: string, id: number | string): Promise<T>;
  get<T>(path: string, id?: number | string): Promise<T | T[]> {
    let url = `${path}`;
    if (id) { url = `${url}/${id}`; }

    return new Promise((resolve, reject) => {
      this.http.get(url)
        .toPromise()
        .then((res: T | T[]) => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  post<T>(path: string, body: any): Promise<T> {
    const url = `${path}`;

    return new Promise((resolve, reject) => {
      this.http.post(url, body)
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

  put<T>(path: string, body: any): Promise<T> {
    const url = `${path}`;

    return new Promise((resolve, reject) => {
      this.http.put(url, body)
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

  search<T>(body: GenericSearchRequest): Promise<GenericSearchResponse<T>> {
    const url = `${body.endpoint}`;

    return new Promise((resolve, reject) => {
      this.http.post(url, body)
        .toPromise()
        .then(
          (res: GenericSearchResponse<T>) => { resolve(res); },
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
