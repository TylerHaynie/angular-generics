import { Subject, Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { Injectable } from '@angular/core';
import { GenericApiService } from '../services/generic-api.service';
import { GenericSearchRequest, GenericSearchResponse } from '../services/generic-search';

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
    this.dataSource = null;
    this.data = null;
  }

  search(request: GenericSearchRequest): void {
    console.log('Query', request);

    this.api.search<T>(request)
      .then((report: GenericSearchResponse<T>) => {
        this._dataLength = report.recordCount;
        this.dataSource.next(report.data);
      });
  }

}
