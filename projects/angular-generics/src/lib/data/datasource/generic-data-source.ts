import { Subject, Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { GenericApiService } from '../../services/generic-api.service';
import { GenericSearchRequest, GenericSearchResponse } from '../../services/generic-search';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericDataSource<T> extends DataSource<T> {
  data: Observable<T[]>;

  private _dataLength: number = 0;
  public get dataLength(): number {
    return this._dataLength;
  }

  private dataSource: Subject<T[]>;

  constructor(private api: GenericApiService) {
    super();
    this.dataSource = new Subject<T[]>();
    this.data = this.dataSource.asObservable();
  }

  connect(): Observable<T[]> {
    return this.data;
  }

  disconnect() {
    this.dataSource.complete();
  }

  search(request: GenericSearchRequest): void {
    console.log('Query', request);

    if (request.method === "get") {
      this.api
        .get<T>(request.endpoint)
        .then((data) => { this.dataSource.next(data); });
    }
    else {
      this.api.search<GenericSearchRequest, GenericSearchResponse<T>>(request.endpoint, request)
        .then((report) => {
          this._dataLength = report.recordCount;
          this.dataSource.next(report.data);
        });
    }

  }

}
